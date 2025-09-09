Feature: Login de usuários no sistema

  Como usuário cadastrado ou não
  Quero realizar tentativas de login
  Para acessar a aplicação com segurança ou receber mensagens apropriadas

@smoke
  Scenario: Login com sucesso com credenciais válidas
    Given que o usuário está na tela de login
    And possui email e senha válidos
    When preenche os campos com "joao@email.com" e "Senha123!"
    And clica em "Acessar"
    Then o usuário deve ser autenticado com sucesso
    And deve ser redirecionado para a tela home

  Scenario Outline: Bloqueio de acesso com credenciais inválidas
    Given que o usuário está na tela de login
    When tenta logar com "<email>" e "<senha>"
    Then o sistema deve exibir a mensagem "Usuário ou senha inválido. Tente novamente ou verifique suas informações!"
    And o sistema deve impedir o acesso e manter o usuário na tela de login

    Examples:
      | email                   | senha        |
      | usuario.valido@empresa.com | senhaErrada  |
      | fake@empresa.com        | qualquer123  |
      | naoexiste@empresa.com   | 123456       |

  Scenario Outline: Validação de campos obrigatórios
    Given que o usuário está na tela de login
    When tenta logar com "<email>" e "<senha>"
    Then o sistema deve exibir a mensagem "Usuário e senha precisam ser preenchidos"
    And o sistema deve impedir o acesso e manter o usuário na tela de login

    Examples:
      | email                       | senha      |
      |                             |            |
      | usuario.valido@empresa.com |            |
      |                             | Senha123!  |