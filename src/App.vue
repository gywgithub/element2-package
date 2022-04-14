<template>
  <div id="app">
    <vue3 />
    <h2>按钮</h2>
    <Button
     :btnContent="btn.btnContent"
     :btnConfig="btn.btnConfig">
    </Button>
    <h2 class="mt10">link文字链接</h2>
    <Link
     :linkContent="link.linkContent" 
     :linkConfig="link.linkConfig">
    </Link>
    <h2 class="mt10">radio单选框组</h2>
    <RadioGroup
     :radioConfig="radioGroup.radioConfig"
     :radioMemberConfig="radioGroup.radioMemberConfig"
     @change="changeRadio">
    </RadioGroup>
    <h2 class="mt10">Checkbox多选框</h2>
    <Checkbox
     :checkboxContent="checkbox.checkboxContent"
     :checkboxConfig="checkbox.checkboxConfig"
     @change="changeCheckbox">
    </Checkbox>  
    <h2 class="mt10">TimePicker时间选择器</h2>
    <TimePicker
      :timePickerContent="timePicker.timePickerContent"
      :timePickerConfig="timePicker.timePickerConfig"
      @change="changeTimePicker"
    />
  </div>
</template>

<script>
import Button from './components/Button.vue';
import Link from './components/Link.vue';
import RadioGroup from './components/RadioGroup.vue';
import Checkbox from './components/Checkbox.vue';
import TimePicker from './components/TimePicker.vue'
import Vue3 from './Vue3.vue'

export default {
  name: 'App',
  components: {
    Button,
    Link,
    RadioGroup,
    Checkbox,
    TimePicker,
    Vue3
  },
  data() {
    return {
      // Button按钮
      btn: {
        btnContent: '测试',
        btnConfig: {
          size: 'small',
          type: 'success',
          icon: 'el-icon-search'
        }
      },
      // Link文字链接
      link: {
        linkConteng: '测试',
        linkConfig: {
          type: 'warning',
        }
      },
      // Radio单选框组
      radioGroup: {
        radioConfig: {
          value: '3',
          isButton: true, //是否按钮样式
          disabled: false,
          // 只对按钮形式生效
          textColor: '#f00',
          fill: '#eee',
        },
        radioMemberConfig: [
          { radioContent: '张三', label: '3', size: 'small'},
          { radioContent: '李四', label: '4', disabled: true},
          { radioContent: '王五', label: '5', border: true,},
        ]
      },
      // Checkbox多选框
      checkbox: {
        checkboxContent: '测试1',
        checkboxConfig: {
          value: 'check',
          check: '选中1',
          checked: true,
          trueLabel: '选中',
          falseLabel: '未选中',
        }
      },
      // TimePicker 时间选择器
      timePicker: {
        timePickerContent: '',
        timePickerConfig: {
          value: '',
          pickerOptions: {
            start: '08:30',
            step: '00:15',
            end: '18:30'
          },
          placeholder: '选择时间'
        }
      }
    }
  },
  methods: {
    // Radio单选框
    changeRadio(value) {
      console.log('radio单选框',value);
    },
    // Checkbox多选框
    changeCheckbox(value) {
      console.log('Checkbox多选框',value);
    },
    // TimePicker 时间选择器
    changeTimePicker(value) {
      console.log('TimePicker 时间选择器', value)
    }
  }
}
</script>

<style>
#app {
  margin-top: 30px;
  margin-left: 50px;
}
.mt10 {
  margin-top: 10px;
}
</style>
