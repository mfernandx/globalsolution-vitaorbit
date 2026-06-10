# 🚀 VitaOrbit

<div align="center">

Sistema de monitoramento pessoal de saúde inspirado em tecnologias utilizadas em missões espaciais.

Desenvolvido para auxiliar o acompanhamento de sinais vitais, sintomas e situações de emergência em ambientes extremos ou com acesso limitado a serviços médicos.

</div>

---

# 📖 Sobre o Projeto

O **VitaOrbit** é um aplicativo mobile desenvolvido com **React Native**, **Expo** e **TypeScript**, cuja proposta é permitir o monitoramento contínuo da saúde de usuários em locais remotos ou de difícil acesso.

O sistema foi inspirado em tecnologias utilizadas em missões espaciais, onde o acompanhamento constante do estado de saúde é essencial para a segurança dos tripulantes.

O aplicativo permite:

- Registro de sinais vitais;
- Registro de sintomas;
- Monitoramento do histórico de saúde;
- Geração de alertas preventivos;
- Solicitação de emergência;
- Gerenciamento do perfil do usuário.

---

# 🎯 Objetivo

Oferecer uma plataforma simples e acessível para acompanhamento de saúde em contextos onde o suporte médico imediato pode não estar disponível.

Exemplos:

- Astronautas em missões espaciais;
- Comunidades rurais;
- Comunidades ribeirinhas;
- Bases de pesquisa isoladas;
- Plataformas marítimas;
- Minas;
- Regiões com infraestrutura limitada.

---

# 🛠 Tecnologias Utilizadas

## Frontend

- React Native
- Expo
- TypeScript
- React Navigation
- Axios
- Context API

## Backend

- ASP.NET Core
- C#
- Entity Framework Core
- SQL Server

---

# 📱 Funcionalidades

## Autenticação

- Cadastro de usuário
- Login
- Logout
- Exclusão de conta

---

## Perfil

- Visualização de dados do usuário
- Atualização de:
  - E-mail
  - Localização
  - Telefone
  - Contato de emergência

---

## Monitoramento de Saúde

Registro de:

- Frequência cardíaca
- Pressão arterial
- Temperatura corporal
- Oxigenação sanguínea
- Humor
- Hidratação
- Sono
- Observações

---

## Monitoramento de Sintomas

Registro de:

- Nome do sintoma
- Intensidade
- Frequência
- Data de início
- Descrição

---

## Histórico

Visualização completa dos:

- Registros de saúde
- Registros de sintomas

---

## Alertas Inteligentes

Geração automática de alertas com base no último registro do usuário.

Exemplos:

- Baixa hidratação
- Poucas horas de sono
- Oxigenação baixa
- Temperatura elevada
- Frequência cardíaca elevada

---

## Emergência

Solicitação rápida de ajuda contendo:

- Localização
- Mensagem personalizada

---

# 🏗 Arquitetura do Projeto

O frontend segue uma arquitetura baseada em separação de responsabilidades.

```text
src
│
│
├── components
│   ├── Header
│   ├── VitalCard
│   ├── UserInfoCard
│   ├── EditModal
│   └── ...
│
├── context
│   └── AuthContext
│
├── control
│   ├── loginControl
│   ├── registerControl
│   ├── dashboardControl
│   ├── healthRecordControl
│   ├── symptomRecordControl
│   ├── recordsControl
│   ├── alertControl
|   ├── emergencyControl
│   └── profileUserControl
│
├── model
│   ├── User
│   ├── HealthRecord
│   ├── SymptomRecord
│   ├── Emergency
│   └── ...
│
│
├── screens
│
├── services
│   ├── userService
│   ├── healthRecordService
│   ├── symptomRecordService
│   ├── emergencyService
│   └── ...
│

```

---

# 📐 Padrão Arquitetural

O projeto segue uma adaptação do padrão:

```text
View
 ↓
Control
 ↓
Service
 ↓
API REST
```

## Screens

Responsáveis apenas pela interface.

## Control

Responsáveis pelas regras de negócio da tela.

## Services

Responsáveis pelas chamadas HTTP.

## Models

Responsáveis pela tipagem dos dados.

---

# 🔌 Integração com API

O frontend foi desenvolvido para consumir uma API REST em ASP.NET Core.

Principais recursos consumidos:

- Usuários
- Login
- Registros de saúde
- Registros de sintomas
- Emergências

---

# 📂 Repositório da API

A API utilizada neste projeto encontra-se em:

```text
https://github.com/mfernandx/vitaorbit-api.git
```

---

# ⚙ Como Executar o Backend

Siga as instruções presentes no README da API:

```text
http://github.com/mfernandx/vitaorbit-api/edit/main/README.md
```

---

# ⚙ Como Executar o Frontend

## Clonar o projeto

```bash
git clone https://github.com/AntonioCarvalhoFIAP/global-solution-1-mfernandx.git
```

---

## Entrar na pasta

```bash
cd VitaOrbit
```

---

## Instalar dependências

```bash
npm install
```

ou

```bash
yarn
```

---

## Configurar URL da API

No arquivo:

```text
src/services/api.ts
```

Configure a URL da API.

Exemplo:

```ts
baseURL: "http://SEU_IP_LOCAL:5000/api"
```

---

## Executar

```bash
npx expo start
```

---

## Executar em Android

```bash
a
```

---

## Executar em iOS

```bash
i
```

---

# 📸 Telas

## Tela Inicial

- Boas-vindas
- Navegação para Login e Cadastro

## Login

- Autenticação do usuário

## Cadastro

- Criação de conta

## Home

- Dashboard de monitoramento

## Registrar Sinais

- Registro de sinais vitais

## Registrar Sintomas

- Registro de sintomas

## Histórico

- Histórico completo

## Alertas

- Recomendações automáticas

## Perfil

- Dados do usuário

## Emergência

- Solicitação de ajuda

---

# 👨‍💻 Desenvolvido por:

* Maria Fernanda Santos Mendes - 2TDSPI
* Beatriz de Sousa Franco – 2TDSPI
* Natan Freitas de Moraes - 2TDSPI
* Giovana Souza Vieira - 2TDSPI 

---

💡 Projeto desenvolvido para fins acadêmicos e educacionais.
