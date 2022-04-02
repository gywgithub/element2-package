<template>
  <div>
    <div style="margin: 20px 0">--- Vue1 ---</div>
    <h2 class="mt10">InputNumber计数器</h2>
    <InputNumber
      :config="inputNumber.config">
    </InputNumber>
    <h2 class="mt10">Select选择器</h2>
    <Select
      :config="select.config"
      :content="select.content"
    >
      <template #prefix>
        <span>12333</span>
      </template>
      <template #empty>
        <span>empty</span>
      </template>
      <template>
        <Option v-for="(item, index) in select.content" :content="item" :key="index">
          <template>
            <span>123</span>
            <span>-</span>
            <span>{{ item.label }}</span>
          </template>
        </Option>
      </template>
    </Select>
    <h2 class="mt10">Switch开关</h2>
    <SwitchUI
      :config="switchObj.config">
    </SwitchUI>
    <h2 class="mt10">Slider滑块</h2>
    <Slider
      :config="slider.config">
    </Slider>
    <div style="margin: 20px 0">--- Vue1 End ---</div>
  </div>
</template>

<script>
import InputNumber from "./components/InputNumber.vue";
import Select from "./components/select/Select.vue";
import Option from "./components/select/Option.vue";
import SwitchUI from "./components/Switch.vue";
import Slider from "./components/Slider.vue";

export default {
  name: "Vue1",
  components: {
    InputNumber,
    Select,
    Option,
    SwitchUI,
    Slider,
  },
  data() {
    return {
      // InputNumber计数器
      inputNumber: {
        config: {
          value: 4,
          min: 3,
        },
      },
      // Select选择器
      select: {
        config: {
          value: null,
          multiple: true,
        },
        content: [
          { label: "测试1", value: 1 },
          { label: "测试2", value: 2 },
          { label: "测试3", value: 3, disabled: true },
          { label: "测试4", value: 4 },
        ],
      },
      // Switch开关
      switchObj: {
        config: {
          value: true,
          activeText: "打开",
          inactiveText: "关闭",
          activeColor: "#13ce66",
          inactiveColor: "#ff4949",
        },
      },
      // Slider滑块
      slider: {
        config: {
          value: 30,
        },
      },
    };
  },
};
</script>
