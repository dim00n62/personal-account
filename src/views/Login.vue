<template>
  <div class="login">
    <img alt="JStick" src="../assets/logo.svg"/>
    <h1 class="login__title">Вход в личный кабинет</h1>
    <div
      class="login__flex-container"
      @keydown.enter="submit"
    >
      <js-input
        v-model="user"
        :error="userError"
        placeholder="Логин"
        @blur="handleUsernameChange"
      />
      <js-input
        v-model="password"
        type="password"
        placeholder="Пароль"
        :error="passwordError"
        @blur="handlePasswordChange"
      />
      <label
        class="login__register"
        v-text="'Зарегистрироваться'"
        @click="goToRegistration"
      />
    </div>

    <js-button
      :disabled="!isFormValid"
      @click="submit">Войти</js-button>
  </div>
</template>

<script>
import axios from 'axios';
import PersonalAccountLoading from '../components/PersonalAccountLoading';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Login',

  data: () => ({
    user: '',
    password: '',
    userError: '',
    passwordError: ''
  }),

  computed: {
    ...mapGetters([
      'loggedIn'
    ]),
    isFormValid() {
      return !!this.user && !!this.password && !this.userError && !this.passwordError;
    }
  },

  methods: {
    ...mapActions([
      'login'
    ]),
    handleUsernameChange(value) {
      if (value) {
        this.userError = '';
      } else {
        this.userError = 'Введите логин';
      }
    },
    handlePasswordChange(value) {
      if (value) {
        this.passwordError = '';
      } else {
        this.passwordError = 'Введите пароль';
      }
    },
    submit() {
      if (!this.isFormValid) {
        return;
      }
      this.openModal();
    },
    goToRegistration() {
      this.$router.push({ name: 'Register' });
    },
    async openModal() {
      const id = this.modalManager.open(PersonalAccountLoading, {
        title: 'Заходим, подождите'
      });

      await this.login({
        login: this.user,
        password: this.password
      });
      this.modalManager.close(id);
      if (this.loggedIn) {
        this.$router.push({ name: 'home' });
      } else {
        alert('Error in username/password');
      }
    }
  }
};
</script>

<style lang="scss" scoped>
  .login {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 0;
    padding: 32px;

    &__flex-container {
      display: flex;
      flex-direction: column;
      margin-bottom: 64px;
    }

    &__title {
      font-size: 40px;
      line-height: 49px;
      margin-bottom: 56px;
      margin-top: 120px;
    }

    &__register {
      align-self: flex-end;
      cursor: pointer;
      font-weight: bold;
      color: var(--main-link-color);
    }
  }
</style>
