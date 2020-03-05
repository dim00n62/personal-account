<template>
  <div class="register">
    <img alt="JStick" src="../assets/logo.svg"/>
    <h1 class="register__title">Регистрация</h1>
    <div class="register__steps">
      <js-step
        :number="1"
        :active="activeStep === 1"
      >
        Параметры аккаунта
      </js-step>
      <div class="register__arrow"></div>
      <js-step
        :number="2"
        :active="activeStep === 2"
      >
        Персональные данные
      </js-step>
    </div>

    <template v-if="activeStep === 1">
      <div class="register__flex-container">
        <js-input placeholder="Логин"/>
        <js-input placeholder="E-mail"/>
        <js-input type="password" placeholder="Пароль"/>
        <js-input type="password" placeholder="Повторите пароль"/>
      </div>

      <js-button @click="activeStep++">Далее</js-button>
    </template>

    <template v-if="activeStep === 2">
      <div class="register__flex-container">
        <js-input placeholder="Имя"/>
        <js-input placeholder="Компания"/>
        <js-input placeholder="Телефон"/>
      </div>

      <js-button @click="openModal">Зарегистрироваться</js-button>
    </template>
  </div>
</template>

<script>
import PersonalAccountLoading from '../components/PersonalAccountLoading';

export default {
  name: 'Register',

  data: () => ({
    activeStep: 1
  }),

  methods: {
    openModal() {
      this.modalManager.open(PersonalAccountLoading, {
        title: 'Регистрация прошла успешно!',
        message: 'Переводим вас в личный кабинет'
      });
    }
  }
};
</script>

<style lang="scss" scoped>
  .register {
    text-align: center;

    &__steps {
      display: flex;
      align-items: center;
      margin-bottom: 56px;
    }

    &__flex-container {
      display: flex;
      flex-direction: column;
      margin-bottom: 72px;
    }

    &__arrow {
      width: 56px;
      height: 2px;
      background: #C8CBD1;
      border-radius: 52px;
      margin: 0 16px;
    }

    &__title {
      font-size: 40px;
      line-height: 49px;
      margin-bottom: 56px;
      margin-top: 120px;
    }
  }
</style>
