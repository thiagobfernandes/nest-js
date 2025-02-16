#include <iostream>
#include <cstring>
#include <arpa/inet.h>
#include <sys/socket.h>
#include <netinet/ip.h>
#include <netinet/if_ether.h>
#include <unistd.h>
#include <linux/if_packet.h>
#include <net/if.h>
#include <sys/ioctl.h>
#include <sstream>

using namespace std;

struct messageSocket {
    string ipSource;
    string ipDest;
    string protocol;
    string macSource;
    string macDest;
    string data;
    string portSource;
    string portDest;
    string flags;
    string ttl;
    string headerChecksum;
    string fragmentOffset;
    string frameType;
    string etherType;
};

void capturarPacotes(const char* interface) {
    int serverSocket = socket(AF_INET, SOCK_STREAM, 0);
    if (serverSocket < 0) {
        perror("Erro ao criar socket do servidor");
        return;
    }
    
    sockaddr_in serverAddress;
    serverAddress.sin_port = htons(8082);
    serverAddress.sin_family = AF_INET;
    serverAddress.sin_addr.s_addr = INADDR_ANY;
    
    if (bind(serverSocket, (struct sockaddr*)&serverAddress, sizeof(serverAddress)) < 0) {
        perror("Erro ao vincular socket");
        close(serverSocket);
        return;
    }
    
    listen(serverSocket, 5);
    cout << "Esperando conexão na porta 8082...\n";
    
    int sock = socket(AF_PACKET, SOCK_RAW, htons(ETH_P_ALL)); // Captura de pacotes
    if (sock < 0) {
        perror("Erro ao criar socket de captura");
        close(serverSocket);
        return;
    }
    
    struct ifreq ifr;
    memset(&ifr, 0, sizeof(ifr));
    strncpy(ifr.ifr_name, interface, IFNAMSIZ - 1);
    
    if (ioctl(sock, SIOCGIFINDEX, &ifr) < 0) {
        perror("Erro ao obter índice da interface");
        close(sock);
        close(serverSocket);
        return;
    }
    
    struct sockaddr_ll sa;
    memset(&sa, 0, sizeof(sa));
    sa.sll_family = AF_PACKET;
    sa.sll_ifindex = ifr.ifr_ifindex;
    sa.sll_protocol = htons(ETH_P_ALL);
    
    if (bind(sock, (struct sockaddr*)&sa, sizeof(sa)) < 0) {
        perror("Erro ao vincular socket de captura à interface");
        close(sock);
        close(serverSocket);
        return;
    }
    
    cout << "Capturando pacotes na interface: " << interface << "...\n";
    
    char buffer[65536];
    sockaddr_in clientAddr;
    socklen_t clientLen = sizeof(clientAddr);
    int clientSocket = accept(serverSocket, (struct sockaddr*)&clientAddr, &clientLen);
    
    if (clientSocket < 0) {
        perror("Erro ao aceitar conexão");
        close(sock);
        close(serverSocket);
        return;
    }
    
    cout << "Cliente conectado!\n";
    
    while (true) {
        ssize_t dataSize = recv(sock, buffer, sizeof(buffer), 0);
        if (dataSize < 0) {
            perror("Erro ao receber pacote");
            break;
        }
        
        struct ethhdr* ethHeader = (struct ethhdr*)buffer;
        struct iphdr* ipHeader = (struct iphdr*)(buffer + sizeof(struct ethhdr));
        
        sockaddr_in src, dest;
        src.sin_addr.s_addr = ipHeader->saddr;
        dest.sin_addr.s_addr = ipHeader->daddr;
        
        messageSocket msg;
        ostringstream macSource, macDest;
        
        for (int i = 0; i < 6; i++) {
            macSource << hex << uppercase << (int)ethHeader->h_source[i];
            if (i < 5) macSource << ":";
        }
        
        for (int i = 0; i < 6; i++) {
            macDest << hex << uppercase << (int)ethHeader->h_dest[i];
            if (i < 5) macDest << ":";
        }
        
        msg.macSource = macSource.str();
        msg.macDest = macDest.str();
        msg.ipSource = "ipSource: " + string(inet_ntoa(src.sin_addr));
        msg.ipDest = "ipDestination: " + string(inet_ntoa(dest.sin_addr));
        msg.protocol = "protocol: " + to_string((int)ipHeader->protocol);
        msg.data = "size: " + to_string(dataSize) + " bytes";
        msg.ttl = "ttl: " + to_string((int)ipHeader->ttl);
        msg.headerChecksum = "headerChecksum: " + to_string((int)ipHeader->check);
        msg.fragmentOffset = "fragmentOffset: " + to_string((int)ipHeader->frag_off);
        msg.etherType = "etherType: " + to_string(ntohs(ethHeader->h_proto));
        
        string serializedMessage = msg.ipSource + "\n" + msg.ipDest + "\n" + msg.protocol + "\n" + msg.macSource + "\n" + msg.macDest + "\n" + msg.data + "\n" + msg.ttl + "\n" + msg.headerChecksum + "\n" + msg.fragmentOffset + "\n" + msg.etherType;
        send(clientSocket, serializedMessage.c_str(), serializedMessage.length(), 0);
        
        memset(buffer, 0, sizeof(buffer));
        sleep(4);
    }
    
    close(clientSocket);
    close(sock);
    close(serverSocket);
}

int main() {
    capturarPacotes("wlp2s0");
    return 0;
}
