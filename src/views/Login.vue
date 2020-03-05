<template>
  <div class="login">
    <img alt="JStick" src="../assets/logo.svg"/>
    <h1 class="login__title">Вход в личный кабинет</h1>
    <div class="login__flex-container">
      <js-input/>
      <js-input type="password"/>
      <label
        class="login__register"
        v-text="'Зарегистрироваться'"
        @click="goToRegistration"
      />
    </div>

    <js-button @click="handleEnterClick">Войти</js-button>
  </div>
</template>

<script>
import PersonalAccountLoading from '../components/PersonalAccountLoading';

export default {
  name: 'Login',

  methods: {
    handleEnterClick() {
      this.openModal();
    },
    goToRegistration() {
      this.$router.push({ name: 'Register' });
    },
    openModal() {
      this.modalManager.open(PersonalAccountLoading, {
        title: 'Заходим, подождите'
      });
    }
  }
};
</script>

<style lang="scss" scoped>
  .login {
    text-align: center;

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
    }
  }
</style>
