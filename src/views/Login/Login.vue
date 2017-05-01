<template>
    <div class="login-view">
        <div class="page-container">
            <div class="form-container">
                <form @submit.prevent="authenticate" method="POST">
                    <div class="card" id="login-card">
                        <div class="card-content">
                            <h1 v-text="$t('login.title')"></h1>

                            <div class="floating-label">
                                <input type="email" required v-model="form.username" class="full-width">
                                <label v-text="$t('login.email')"></label>
                            </div>

                            <div class="floating-label">
                                <input type="password" required v-model="form.password" class="full-width">
                                <label v-text="$t('login.password')"></label>
                            </div>

                            <div class="actions">
                                <label class="remember-me">
                                    <q-checkbox v-model="checked"></q-checkbox>
                                    {{$t('login.rememberme')}}
                                </label>

                                <div class="right-align">
                                    <spinner color="#1290FD" :size="40" v-show="loader.is_loading"></spinner>
                                    <button class="primary big" type="submit" v-text="$t('buttons.start')"></button>
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

import OAuth from 'src/oauth'
import router from 'config/router'
import { Dialog } from 'quasar'

let auth = new OAuth()
import {i18n} from './strings'

    export default {
      data () {
        return {
            checked : true,
            loader : {
                is_loading : false
            },
            form : {
                username : null,
                password : null,
            }
        }
      },
      methods: {
        async authenticate(){
            try {
                this.loader.is_loading = true;
                let success = await auth.authenticate(this.form);
                this.loader.is_loading = false;
                router.go('/')

            }catch(error){
                this.loader.is_loading = false;
                console.log(error.response)
                Dialog.create({
                  title: 'Error',
                  message: this.$t('ERROR_RESPONSES.AUTH.UNAUTHORIZED'),
                  buttons: [
                    {
                      label: 'Aceptar',
                      handler () {
                        // empty the trash bin, yo
                      }
                    }
                  ]
                })
            }
        },
        goBack () {
          window.history.go(-1)
        }
      },
      mounted(){
      },
      i18n
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
