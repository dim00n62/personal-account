<template>
  <div class="register">
    <img alt="JStick" src="../assets/logo.svg"/>
    <h1 class="register__title">Регистрация</h1>
    <div class="register__steps">
      <js-step
        :number="1"
        :active="activeStep === 1"
        @click.native="activeStep = 1"
      >
        Параметры аккаунта
      </js-step>
      <div class="register__arrow"></div>
      <js-step
        :number="2"
        :active="activeStep === 2"
        @click.native="activeStep = 2"
      >
        Персональные данные
      </js-step>
    </div>

    <template v-if="activeStep === 1">
      <div class="register__flex-container">
        <js-input
          v-model="login"
          placeholder="Логин"
          :error="loginError"
          @blur="checkFormItem($event, 'login')"
        />
        <js-input
          v-model="email"
          placeholder="E-mail"
          :error="emailError"
          @blur="checkFormItem($event, 'email')"
        />
        <js-input
          v-model="password1"
          type="password"
          placeholder="Пароль"
          :error="passwordError"
          @blur="checkFormItem([$event, password2], 'password')"
        />
        <js-input
          v-model="password2"
          type="password"
          placeholder="Повторите пароль"
          :error="passwordError"
          @blur="checkFormItem([$event, password1], 'password')"
        />
      </div>

      <js-button @click="activeStep++">Далее</js-button>
    </template>

    <template v-if="activeStep === 2">
      <div class="register__flex-container">
        <js-input
          v-model="name"
          placeholder="Имя"
          :error="nameError"
          @blur="checkFormItem($event, 'name')"
        />
        <js-input
          v-model="company"
          placeholder="Компания"
          :error="companyError"
          @blur="checkFormItem($event, 'company')"
        />
        <js-input
          v-model="phone"
          placeholder="Телефон"
          :error="phoneError"
          mask="+7 (###) ###-##-##"
          @blur="checkFormItem($event, 'phone')"
        />
      </div>

      <js-button
        :disabled="!isFormValid"
        @click="openModal">Зарегистрироваться</js-button>
    </template>
  </div>
</template>

<script>
import PersonalAccountLoading from '../components/PersonalAccountLoading';
import axios from 'axios';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Register',

  data: () => ({
    activeStep: 1,
    login: '',
    loginError: '',
    email: '',
    emailError: '',
    password1: '',
    password2: '',
    passwordError: '',
    name: '',
    nameError: '',
    company: '',
    companyError: '',
    phone: '',
    phoneError: ''
  }),

  computed: {
    ...mapGetters([
      'loggedIn'
    ]),
    isFormValid() {
      return !!this.login && !this.loginError
        && !!this.name && !this.nameError
        && !!this.email && !this.emailError
        && /^[a-z0-9_-]{2,}(\.[a-z0-9_-]+)*@[a-z0-9_-]{2,}(\.[a-z0-9_-]{2,})*\.[a-z]{2,6}$/.test(this.email)
        && this.password1 === this.password2 && !this.passwordError
        && !!this.company && !this.companyError
        && !!this.phone && !this.phoneError
        && /\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}/.test(this.phone);
    }
  },

  methods: {
    ...mapActions([
      'register'
    ]),
    async openModal() {
      const id = this.modalManager.open(PersonalAccountLoading, {
        title: 'Регистрация прошла успешно!',
        message: 'Переводим вас в личный кабинет'
      });
      await this.register({
        login: this.login,
        email: this.email,
        password1: this.password1,
        password2: this.password1,
        name: this.name,
        company: this.company,
        phone: this.phone
      });
      this.modalManager.close(id);
      if (this.loggedIn) {
        this.$router.push({ name: 'home' });
      } else {
        alert(e.message);
      }
    },
    checkFormItem(value, item) {
      const validatorMap = {
        login: (val) => !!val,
        name: (val) => !!val,
        company: (val) => !!val,
        email: (val) =>
          !!val && /^[a-z0-9_-]{2,}(\.[a-z0-9_-]+)*@[a-z0-9_-]{2,}(\.[a-z0-9_-]{2,})*\.[a-z]{2,6}$/.test(val),
        phone: (val) => !!val && /\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}/.test(val),
        password: (val) => val[0] === val[1]
      };
      const errorMap = {
        login: 'Обязательное поле',
        name: 'Обязательное поле',
        company: 'Обязательное поле',
        email: 'Некорректный e-mail',
        phone: 'Некорректный телефон',
        password: 'Пароли должны совпадать'
      };

      this[item + 'Error'] = validatorMap[item](value) ? '' : errorMap[item];
    }
  }
};
</script>

<style lang="scss" scoped>
  .register {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 0;
    padding: 32px;

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
