# 📚 Guia Completo: Publicar no GitHub Pages

## ⚠️ Pré-requisitos

Você deve ter:
- ✅ Conta GitHub criada (https://github.com)
- ✅ Git instalado no seu computador
- ✅ Terminal/PowerShell aberto na pasta do projeto

## 🎯 Opção 1: GitHub Pages com seu Usuário (RECOMENDADO)

### Passo 1: Criar o Repositório Correto

1. Acesse https://github.com/new
2. Em **Repository name**, digite: `seu-usuario.github.io`
   - ⚠️ **IMPORTANTE**: Substitua `seu-usuario` pelo seu username do GitHub
   - Exemplo: se seu usuário é `joao-silva`, digite `joao-silva.github.io`

3. Deixe como **Public** (não deixe private)
4. ❌ NÃO marque "Add a README file" (você já tem)
5. Clique em **Create repository**

### Passo 2: Configurar Git Localmente

Abra o PowerShell/Terminal na pasta do projeto e execute:

```powershell
# Configurar seu nome de usuário
git config --global user.name "Seu Nome"

# Configurar seu email
git config --global user.email "seu.email@github.com"

# Verificar se está configurado
git config --global user.name
```

### Passo 3: Conectar com o Repositório Remoto

Execute os comandos que aparecem no GitHub (será algo assim):

```powershell
git branch -M main
git remote add origin https://github.com/seu-usuario/seu-usuario.github.io.git
git add .
git commit -m "Adicionar landing page do portfólio"
git push -u origin main
```

**Ou use SSH (mais seguro se configurado):**

```powershell
git remote add origin git@github.com:seu-usuario/seu-usuario.github.io.git
git push -u origin main
```

### Passo 4: Ativar GitHub Pages

1. Acesse: https://github.com/seu-usuario/seu-usuario.github.io
2. Vá em **Settings** (ícone de engrenagem)
3. Clique em **Pages** (na barra lateral esquerda)
4. Em **Source**, verifique se está selecionado:
   - Branch: `main` (ou `master`)
   - Pasta: `/ (root)`
5. Clique em **Save**

### Passo 5: Versão ao Vivo! 🚀

**Aguarde 1-2 minutos** e acesse:
```
https://seu-usuario.github.io
```

Pronto! Seu portfólio está publicado!

---

## 🎯 Opção 2: GitHub Pages em um Repositório Específico

### Passo 1: Criar o Repositório

1. Acesse https://github.com/new
2. Em **Repository name**, digite: `landingpage` (ou outro nome que desejar)
3. Deixe como **Public**
4. Clique em **Create repository**

### Passo 2: Enviar Arquivos

```powershell
git branch -M main
git remote add origin https://github.com/seu-usuario/landingpage.git
git add .
git commit -m "Adicionar landing page do portfólio"
git push -u origin main
```

### Passo 3: Ativar GitHub Pages

1. Vá para **Settings** do repositório
2. Clique em **Pages**
3. Em **Source**, selecione:
   - Branch: `main`
   - Pasta: `/ (root)`
4. **Save**

### Passo 4: Acessar

Sua página estará em:
```
https://seu-usuario.github.io/landingpage
```

---

## 🔐 Autenticação (Se Pedido)

Se o Git pedir senha/token:

### Com HTTPS:
1. Vá em GitHub → **Settings** → **Developer settings** → **Personal access tokens**
2. Clique em **Generate new token**
3. Dê um nome: "GitHub Pages Deploy"
4. Marque **repo** e **workflow**
5. Clique em **Generate token**
6. **Copie o token** (aparece apenas uma vez!)
7. Cole como senha quando solicitado

### Com SSH (Alternativa Melhor):
```powershell
# Gerar chave SSH
ssh-keygen -t ed25519 -C "seu.email@github.com"

# Pressione Enter 3x para aceitar defaults

# Copiar a chave pública
Get-Content "$HOME\.ssh\id_ed25519.pub" | Set-Clipboard

# Ir em GitHub: Settings → SSH and GPG keys → New SSH key
# Cole a chave e salve

# Testar conexão
ssh -T git@github.com
```

---

## 🔄 Atualizando seu Portfólio

Depois de fazer alterações:

```powershell
# Entrar na pasta
cd d:\github\landingpage

# Verificar alterações
git status

# Adicionar arquivos
git add .

# Fazer commit com mensagem
git commit -m "Atualizar seção de projetos"

# Enviar para GitHub
git push origin main
```

**Aguarde 1-5 minutos** para as alterações aparecerem no site.

---

## 🎨 Personalizações Importantes

Antes de publicar, atualize no `index.html`:

1. **Email**: Procure `seu.email@example.com`
2. **GitHub**: Procure `seu-usuario`
3. **LinkedIn**: Procure URL completa
4. **Descrição profissional**: Adapte conforme necessário

---

## ❌ Troubleshooting

### Site não aparece após push?

- ✅ Aguarde 5 minutos
- ✅ Limpe o cache do navegador (Ctrl + Shift + Delete)
- ✅ Verifique em GitHub → Settings → Pages se está ativo
- ✅ Verifique se o branch é `main` ou `master`

### Erro de autenticação?

- ✅ Crie um Personal Access Token (veja acima)
- ✅ Use SSH em vez de HTTPS
- ✅ Verifique se o username está correto

### Domínio customizado?

Para usar seu próprio domínio:
1. Acesse GitHub → Settings → Pages
2. Em "Custom domain", digite seu domínio
3. Configure os DNS records (instruções fornecidas pelo GitHub)

---

## 📞 Precisa de Ajuda?

- 📖 [Documentação GitHub Pages](https://docs.github.com/en/pages)
- 🎓 [Git Documentation](https://git-scm.com/doc)
- 💬 [GitHub Community](https://github.community)

---

**Sucesso! Seu portfólio em breve estará online! 🎉**
