<template>
  <div>
    <h2>按钮</h2>
    <Button :content="btn.content" :config="btn.config"> </Button>
    <h2 class="mt10">link文字链接</h2>
    <Link :content="link.content" :config="link.config"> </Link>
    <h2 class="mt10">radio单选框组</h2>
    <RadioGroup
      :config="radioGroup.config"
      :content="radioGroup.content"
      @change="changeRadio"
    >
    </RadioGroup>
    <h2 class="mt10">Checkbox多选框</h2>
    <Checkbox
      :content="checkbox.content"
      :config="checkbox.config"
      @change="changeCheckbox"
    >
    </Checkbox>
    <h2 class="mt10">TimePicker时间选择器</h2>
    <TimePicker
      :content="timePicker.content"
      :config="timePicker.config"
      @change="changeTimePicker"
    />
    <h2 class="mt10">CheckboxGroup多选框组</h2>
    <CheckboxGroup
      :config="checkboxGroup.config"
      :content="checkboxGroup.content"
      @change="changeCheckboxGroup"
    >
    </CheckboxGroup>
    <h2 class="mt10">时间选择器 el-time-select</h2>
    <TimeSelect
      :content="timeSelect.content"
      :config="timeSelect.config"
      @change="changeTimeSelect"
    />
    <h2 class="mt10">时间选择器 el-time-picker</h2>
    <TimePicker
      :content="timePicker.content"
      :config="timePicker.config"
      @change="changeTimePicker"
    />
    <h2 class="mt10">Input输入框</h2>
    <Input ref="mark" :config="input.config">
      <template #prepend>
        <span>prepend</span>
      </template>
      <template #append>
        <Button :content="btn.content" :config="btn.config">
          {{ btn.content }}
        </Button>
      </template>
    </Input>
  </div>
</template>

<script>
import Button from '../components/Button.vue';
import Link from '../components/Link.vue';
import RadioGroup from '../components/RadioGroup.vue';
import Checkbox from '../components/Checkbox.vue';
import TimePicker from '../components/TimePicker.vue'

import CheckboxGroup from '../components/CheckboxGroup.vue';
import Input from '../components/Input.vue';
import TimeSelect from '../components/TimeSelect.vue';
export default {
  name: '',
  components: {
    Button,
    Link,
    RadioGroup,
    Checkbox,
    TimePicker,
    CheckboxGroup,
    Input,
    TimeSelect
  },
  data () {
    return {
      // Button按钮
      btn: {
        content: '测试',
        config: {
          size: 'small',
          type: 'success',
          icon: 'el-icon-search'
        }
      },
      // Link文字链接
      link: {
        content: '测试',
        config: {
          type: 'warning',
        }
      },
      // Radio单选框组
      radioGroup: {
        config: {
          value: '3',
          isButton: true, //是否按钮样式
          disabled: false,
          // 只对按钮形式生效
          textColor: '#f00',
          fill: '#eee',
        },
        content: [
          { content: '张三', label: '3', size: 'small' },
          { content: '李四', label: '4', disabled: true },
          { content: '王五', label: '5', border: true, },
        ]
      },
      // Checkbox多选框
      checkbox: {
        content: '测试1',
        config: {
          isButton: false, //是否按钮样式
          value: 'check',
          check: '选中1',
          checked: true,
          trueLabel: '选中',
          falseLabel: '未选中',
        }
      },
      // CheckboxGroup多选框组
      checkboxGroup: {
        config: {
          value: ['测试1', '测试3', '测试4'],
          size: 'small',
          isButton: false, //是否按钮样式
          // textColor: 'red'
        },
        content: [
          { label: '测试1' },
          { label: '测试2' },
          { label: '测试3' },
          { label: '测试4' },
          { label: '测试5', disabled: true },
        ]
      },
      // timeSelect 时间选择器
      timeSelect: {
        content: '',
        config: {
          value: '',
          pickerOptions: {
            start: '08:30',
            step: '00:15',
            end: '18:30'
          },
          placeholder: '选择时间'
        }
      },
      // Input输入框
      input: {
        config: {
          typw: 'text',
          value: '123',
        },
      },
      // timePicker 时间选择器
      timePicker: {
        content: '',
        config: {
          value: '',
          pickerOptions: {
            selectableRange: '18:30:00 - 20:30:00'
          },
          placeholder: '任意时间点'
        }
      }
    }
  },
  mounted () {
    // input  methods使用示例
    this.$nextTick(() => {
      console.log(this.$refs.mark.$children[0]);
      this.$refs.mark.$children[0].select();
    })
  },
  methods: {
    // Radio单选框
    changeRadio (value) {
      console.log('radio单选框', value);
    },
    // Checkbox多选框
    changeCheckbox (value) {
      console.log('Checkbox多选框', value);
    },
    // CheckboxGroup多选框组
    changeCheckboxGroup (value) {
      console.log('CheckboxGroup多选框组', value);
    },
    // timeSelect 时间选择器
    changeTimeSelect (value) {
      console.log('timeSelect 时间选择器', value)
    },
    // timePicker 时间选择器
    changeTimePicker (value) {
      console.log('timePicker 时间选择器', value)
    }
  }
}
</script>
