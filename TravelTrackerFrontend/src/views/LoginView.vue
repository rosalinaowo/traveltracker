<template>
    <br>
    <div id="divForm" class="container-fluid">

      <div class="rounded p-4 px-5 border border-secondary">
        <!-- DIV LABELS -->
        <div class="row">
          
          <label class="my-1">Username:</label>
          <input class="m-1" type="email" id="inpName" placeholder="username@mail.com">
          
          <label class="my-1 mt-3">Password:</label>
          <input class="m-1" type="password" id="inpPsw" placeholder="password123!">
         
          <span id="btnLogin" class="btn btn-success mt-4">Log in</span>
          <span id="btnSignUp" class="btn btn-light mt-4">Registrati</span>
          
        </div>

    </div>
  </div>
</template>
  
<style scoped>
  #divForm{
    width: 50vw;
  }

  input{
    height: 5vh;
  }

  label{
    font-size: x-large;
  }

  #btnLogin{
    width: 7vw;
    margin-left: 18vw;
  }

  #btnSignUp{
    width: 7vw;
    margin-left: 18vw;
  }

</style>  