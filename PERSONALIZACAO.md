# ✅ Checklist de Personalização

Antes de publicar seu portfólio no GitHub Pages, certifique-se de atualizar todas essas informações:

## 📝 Informações Essenciais (OBRIGATÓRIO)

- [ ] **Email**: Abra `index.html` e procure por `seu.email@example.com` - atualize com seu email real
- [ ] **GitHub**: Procure por `seu-usuario` - atualize com seu username do GitHub
- [ ] **LinkedIn**: Procure por `https://linkedin.com/in/seu-usuario` - adicione seu perfil
- [ ] **Twitter**: Procure por `https://twitter.com/seu-usuario` - adicione sua conta
- [ ] **Localização**: Procure por `Arapongas, Paraná - Brasil` - atualize sua localização

## 🎓 Informações Profissionais (RECOMENDADO)

- [ ] **Instituição**: Verifique se "Unopar" está correta
- [ ] **Semestre**: Verifique se "5º Semestre" está correto
- [ ] **Empresa**: Verifique se "IRED Internet" está correto
- [ ] **Especialidades**: Revise as 6 especialidades listadas e adapte conforme necessário

## 💻 Tecnologias e Habilidades

- [ ] Confirme que todas as tecnologias listadas estão corretas:
  - Frontend: HTML5, CSS3, JavaScript, React, Angular
  - Backend: NestJS, TypeScript, MySQL, MongoDB
  - Infraestrutura: Redes, Suporte Técnico, IA & Automação, Git

## 🔗 Redes Sociais (IMPORTANTE)

No arquivo `index.html`, localize e atualize:

```html
<!-- Procure por:-->
<a href="https://linkedin.com/in/seu-usuario" target="_blank">

<!-- E substitua por-->
<a href="https://linkedin.com/in/seu-linkedin-username" target="_blank">
```

Repita para:
- Email: `seu.email@example.com`
- GitHub: `seu-usuario`
- Twitter: `seu-usuario`

## 🎨 Design e Cores

O design já está completo com:
- ✅ Gradiente Amarelo (#FFD700) ↔️ Violeta (#9D4EDD)
- ✅ Tema escuro futurístico
- ✅ Animações modernas
- ✅ Responsivo para mobile/tablet/desktop

Se quiser personalizar as cores, edite `style.css`:

```css
:root {
    --primary: #FFD700;      /* Amarelo - mude aqui */
    --secondary: #9D4EDD;    /* Violeta - mude aqui */
    --dark: #0A0E27;         /* Fundo escuro */
    /* ... */
}
```

## 📄 Como Personalizar para Seu Nome

### Opção A: GitHub Pages com Seu Usuário

Nome do repositório deve ser: **SEU-USERNAME.github.io**

Exemplo:
- Se seu GitHub é `joao-silva`
- Crie repositório `joao-silva.github.io`
- Site ficará em: `https://joao-silva.github.io`

### Opção B: Repositório Específico

Crie um repositório chamado `landingpage` ou outro nome
Site ficará em: `https://seu-username.github.io/nome-do-repositorio`

## 🚀 Passo a Passo Final

```
1. ✅ Personalizar informações de contato (index.html)
2. ✅ Atualizar redes sociais (index.html)
3. ✅ Criar repositório no GitHub (seu-usuario.github.io)
4. ✅ Fazer commit local: git add . && git commit -m "Mensagem"
5. ✅ Conectar remote: git remote add origin https://github.com/...
6. ✅ Fazer push: git push -u origin main
7. ✅ Ativar GitHub Pages (Settings → Pages)
8. ✅ Aguardar 1-2 minutos
9. ✅ Acessar https://seu-usuario.github.io
```

## 📊 Verificação Final

Antes de tornar público:

- [ ] Todos os links funcionam (teste clicando em cada um)
- [ ] Email está correto em múltiplos lugares
- [ ] GitHub está linkado corretamente
- [ ] Página fica bem no celular (use F12 → Responsive Design Mode)
- [ ] Página fica bem no tablet
- [ ] Página fica bem no desktop

## ⚙️ Comandos Úteis após Publicação

Fazer atualizações futuras:

```powershell
# Entrar na pasta
cd d:\github\landingpage

# Ver o que mudou
git status

# Adicionar mudanças
git add .

# Fazer commit
git commit -m "Descreva a mudança aqui"

# Enviar para GitHub
git push origin main
```

---

## 📞 Dúvidas Comuns

**P: Quanto tempo leva para aparecer online?**  
R: Normalmente 1-5 minutos. Se demorar mais, limpe cache e verifique Settings → Pages.

**P: Posso customizar o domínio?**  
R: Sim! Em GitHub Settings → Pages → Custom domain

**P: Como adicionar mais projetos?**  
R: Edite `index.html` e adicione uma seção `<section id="projects">` com seus projetos.

**P: Posso usar um tema diferente?**  
R: Sim! Edite `style.css` com as cores que preferir.

---

## 🎉 Tudo Pronto?

Quando terminar tudo, seu portfólio estará:
- ✅ Online 24/7
- ✅ Acessível via Google
- ✅ Rápido e responsivo
- ✅ Profissional e moderno
- ✅ Fácil de atualizar

**Parabéns pela criação do seu portfólio! 🚀**
