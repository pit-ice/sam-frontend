<template>
  <div class="register">
    <BreadScrumb></BreadScrumb>
    <div class="title">
      <h3>회원가입 - 개인</h3>
      <p>세계속 종합 에너지 화학기업에서 제공하는 다양한 Solution 과 Machine Learning을 경험 해 보세요!</p>
    </div>

    <div class="wrap-process">
      <ul>
        <li class="on"><span>1</span>약관 동의</li>
        <li><span>2</span>정보 입력</li>
        <li><span>3</span>가입신청 완료</li>
      </ul>
    </div>

    <div class="wrap-reg-agree">
      <div class="txt-agree">
        <input type="checkbox" id="ch" v-model="selectAll" />
        <label class="checkbox" for="ch"><span class="icon"></span>모든 약관에 동의 합니다.</label>
      </div>
      <ul>
        <li v-for="agree in agreement" :key="agree.terms_number">
          <h4>{{ agree.terms_name }}</h4>
          <div class="box-agree">
            {{ agree.terms_contents }}
          </div>
          <div class="txt-agree">
            <input type="checkbox" :value="agree.terms_number" v-model="selected" />
            <label class="checkbox" v-if="agree.is_mandatory"><span class="icon"></span>이용약관에 동의합니다. (필수)</label>
            <label class="checkbox" v-else><span class="icon"></span>이용약관에 동의합니다. (선택)</label>
          </div>
        </li>
      </ul>
      <div class="wrap-btn">
        <router-link to="/home" tag="button" class="btn btn-cancel">취소</router-link>
        <button class="btn btn-agree" @click="submit" :disabled="!formIsValid">동의</button>
      </div>
    </div>
  </div>
</template>
<script>
import BreadScrumb from '@/components/BreadScrumb.vue';
const defaultForm = Object.freeze({
  agree: [],
  all: false,
});

export default {
  data() {
    return {
      form: Object.assign({}, defaultForm),
      defaultForm,
      selected: [],
      isMandatory: false,
      userIds: [],
    };
  },

  computed: {
    agreement() {
      return this.$store.state.terms.agreement;
    },
    agreeCount() {
      let cnt = 0;
      this.agreement.forEach(function (agree) {
        if (agree.is_mandatory) {
          cnt++;
        }
      });
      return cnt;
    },
    // code6
    formIsValid() {
      console.log(this.agreeCount);
      const selected = this.selected;
      let isMandatory = false;
      let selected1 = [];
      this.agreement.forEach(function (agree) {
        if (agree.is_mandatory) {
          if (selected.indexOf(agree.terms_number) != -1) {
            selected1.push(agree.terms_number);
          }
        }
      });

      if (this.agreeCount == selected1.length) {
        isMandatory = true;
      }

      return isMandatory;
    },

    selectAll: {
      get: function () {
        return this.agreement ? this.selected.length == this.agreement.length : false;
      },
      set: function (value) {
        var selected = [];

        if (value) {
          this.agreement.forEach(function (agree) {
            selected.push(agree.terms_number);
          });
        }
        this.selected = selected;
      },
    },
  },
  methods: {
    resetForm() {
      this.form = Object.assign({}, this.defaultForm);
      this.$refs.form.reset();
    },
    submit() {
      console.log(this.selected);

      this.$store.dispatch('member/secondStep', this.selected).then(
        () => {
          this.$router.push('/member/register/indivisual/info');
        },
        (error) => {
          alert(error.message);
        }
      );
    },
  },
  created() {
    //진입시 첫번째 panel 펼침
    this.$store.dispatch('terms/terms', 1);
  },
  components: {
    BreadScrumb,
  },
};
</script>
