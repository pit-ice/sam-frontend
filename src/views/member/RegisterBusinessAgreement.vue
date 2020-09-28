<template>
  <div class="register">
    <BreadScrumb></BreadScrumb>

    <div class="title">
      <h3>회원가입 - 기업</h3>
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
        <li v-for="agree in agrees" :key="agree.id">
          <h4>{{ agree.title }}</h4>
          <div class="box-agree">
            {{ agree.contents }}
          </div>
          <div class="txt-agree">
            <input type="checkbox" :value="agree.id" v-model="selected" />
            <label class="checkbox"><span class="icon"></span>이용약관에 동의합니다. (필수)</label>
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
      allSelected: false,
      userIds: [],
      terms1: false,
      terms2: false,
      terms3: false,
      agrees: [
        {
          contents:
            '여러분을 환영합니다. 회원으로 가입하시면 서비스를 보다 편리하게 이용할 수 있습니다. 여러분이 제공한 콘텐츠를 소중히 다룰 것입니다. 여러분의 개인정보를 소중히 보호합니다. 타인의 권리를 존중해 주세요. 부득이 서비스 이용을 제한할 경우 합리적인 절차를 준수합니다. 서비스 중단 또는 변경 시 꼭 알려드리겠습니다. 주요 사항을 잘 안내하고 여러분의 소중한 의견에 귀 기울이겠습니다. 여러분이 쉽게 알 수 있도록 약관 및 운영정책을 게시하며 사전 공지 후 개정합니다.',
          title: '회원 약관',
          id: 1,
        },
        {
          contents:
            '서비스 기획부터 종료까지 정보통신망 이용촉진 및 정보보호 등에 관한 법률(이하 ‘정보통신망법’), 개인정보보호법 등 국내의 개인정보 보호 법령을 철저히 준수합니다. 또한 OECD의 개인정보 보호 가이드라인 등 국제 기준을 준수하여 서비스를 제공합니다.',
          title: '개인정보 수집 및 이용동의',
          id: 2,
        },
        {
          contents:
            '청소년이 건전한 인격체로 성장할 수 있도록 하기 위하여 청소년 보호정책을 수립, 시행하고 있습니다. 회사는 청소년들이 유해정보에 접근할 수 없도록 방지하고 있는 바, 본 청소년 보호정책을 통하여 회사가 청소년보호를 위해 어떠한 조치를 취하고 있는지 알려드립니다.',
          title: '마케팅 / 홍보의 수집 및 이용동의',
          id: 3,
        },
      ],
    };
  },

  computed: {
    // code6
    formIsValid() {
      var terms1 = false;
      var terms2 = false;
      var terms3 = false;

      if (this.selected.indexOf(1) != -1) {
        terms1 = true;
      }
      if (this.selected.indexOf(2) != -1) {
        terms2 = true;
      }
      if (this.selected.indexOf(3) != -1) {
        terms3 = true;
      }

      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.terms1 = terms1;
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.terms2 = terms2;
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.terms3 = terms3;

      return this.terms1 && this.terms2;
    },

    selectAll: {
      get: function () {
        return this.agrees ? this.selected.length == this.agrees.length : false;
      },
      set: function (value) {
        var selected = [];
        var terms1 = false;
        var terms2 = false;
        var terms3 = false;

        if (value) {
          this.agrees.forEach(function (agree) {
            selected.push(agree.id);
            if (agree.id === 1) {
              terms1 = true;
            }
            if (agree.id === 2) {
              terms2 = true;
            }
            if (agree.id === 3) {
              terms3 = true;
            }
          });
        }
        this.terms1 = terms1;
        this.terms2 = terms2;
        this.terms3 = terms3;
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
      this.$store.dispatch('member/secondStep', { terms1: this.terms1, terms2: this.terms2, terms3: this.terms3 }).then(
        () => {
          this.$router.push('/member/register/business/info');
        },
        (error) => {
          alert(error.message);
        }
      );
    },
  },

  components: {
    BreadScrumb,
  },
};
</script>
