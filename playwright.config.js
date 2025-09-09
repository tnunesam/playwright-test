// @ts-check
import { defineConfig } from '@playwright/test';

/**
 * Este arquivo agora serve principalmente para guardar configurações GLOBAIS
 * que o Playwright pode usar, mesmo quando iniciado pelo Cucumber,
 * como baseURL e timeouts.
 */
export default defineConfig({
  // A seção 'use' é a mais importante para nós.
  // As configurações aqui dentro são aplicadas a qualquer ação do Playwright (page.goto, page.click, etc).
  use: {
    /* Descomentamos e definimos a URL base da nossa aplicação.
       Isso nos permite usar `await page.goto('/')` em vez da URL completa.
       É uma ótima prática. */
    baseURL: 'https://bugbank.netlify.app/',

    /* O trace é uma ferramenta de depuração fantástica.
       'retain-on-failure' vai gravar um trace completo de qualquer teste que falhar,
       ajudando muito a investigar o problema. */
    trace: 'retain-on-failure',

    /* Vamos adicionar um timeout global para as ações.
       Se uma ação (como esperar por um elemento) demorar mais que 10 segundos,
       o teste vai falhar. Isso evita que os testes fiquem "presos" indefinidamente.
       O valor é em milissegundos (10000ms = 10s). */
    timeout: 10000,
  },


  // --- SEÇÕES COMENTADAS POIS NÃO SÃO USADAS PELO CUCUMBER ---

  /* A pasta de testes é definida no arquivo `cucumber.js` (na opção `paths`).
     Por isso, não precisamos desta linha. */
  // testDir: './tests',

  /* As opções de paralelismo, retries, etc., são do executor do Playwright.
     O Cucumber tem suas próprias formas de lidar com isso, se necessário. */
  // fullyParallel: true,
  // forbidOnly: !!process.env.CI,
  // retries: process.env.CI ? 2 : 0,
  // workers: process.env.CI ? 1 : undefined,

  /* O relatório também é definido no `cucumber.js` (na opção `format`). */
  // reporter: 'html',

  /* Os projetos de navegadores não são usados aqui porque estamos iniciando
     o navegador manualmente no nosso arquivo de hooks (`features/support/hooks.js`).
     Se quiséssemos, poderíamos ler esta configuração nos hooks, mas
     para simplificar, vamos deixar comentado. */
  // projects: [
  //   {
  //     name: 'chromium',
  //     use: { ...devices['Desktop Chrome'] },
  //   },
  //   {
  //     name: 'firefox',
  //     use: { ...devices['Desktop Firefox'] },
  //   },
  //   {
  //     name: 'webkit',
  //     use: { ...devices['Desktop Safari'] },
  //   },
  // ],
});