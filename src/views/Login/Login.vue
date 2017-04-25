<template>
    <div class="login-view fullscreen">
        <div class="page-container">
            <div class="form-container">
                <form action="" method="POST">

                    <div class="card" id="login-card">
                        <div class="card-content">
                            <h1>Login</h1>

                            <div class="floating-label">
                                <input type="email" required class="full-width">
                                <label>E-mail</label>
                            </div>

                            <div class="floating-label">
                                <input type="password" required class="full-width">
                                <label>Password</label>
                            </div>

                            <div class="actions">
                                <label class="remember-me">
                                    <q-checkbox v-model="checked"></q-checkbox>
                                    Remember me
                                </label>

                                <div class="right-align">
                                    <button class="primary big" type="submit">Iniciar</button>
                                </div>
                            </div>
                        </div>

                    </div>
                
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      data () {
        return {
          canGoBack: window.history.length > 1
        }
      },
      methods: {
        goBack () {
          window.history.go(-1)
        }
      }
    }

</script>

<style lang="scss">
  
.login-view{
    text-align: center;
    display: table;
    width: 100%;

    h1{
        font-size: 2.3rem;
    }

    .page-container{
        display: table;
        width: 100%;
        
        .form-container{
            display: table-cell;
            float: none;
            vertical-align: middle;

        }

        #login-card{
            max-width: 420px;
            margin: 0 auto;
            .floating-label{
                margin-bottom: 1em;
            }
        }
    }

    .actions{
        text-align: left;
        .remember-me{
            display: block;
            margin: 20px 0;
        }
    }
}
</style>
