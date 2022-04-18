import { Message, MessageBox, Loading } from 'element-ui';

 // MESSAGE
export function Messages(options = {}) {
  const obj = {
    iconClass: options.iconClass,
    type: options.type ? options.type : 'info',
    message: options.message,
    duration: options.duration ? options.duration : '3000',
    showClose: options.showClose ? options.showClose : false,
    center: options.center ? options.center : true,

    customClass: options.customClass ? options.customClass : ' ',
    onClose: options.onClose ? options.onClose : () => {},
    offset: options.offset ? options.offset : 20,
    dangerouslyUseHTMLString: options.dangerouslyUseHTMLString
      ? options.dangerouslyUseHTMLString
      : false
  };
  if (!options.message) return;
  Message(obj);
}

//  MESSAGEBOX
export function Confirm( message, title, options = {}) {
      const obj = messageOptions(options);
      return MessageBox.confirm(message, title, obj);
}

export function Alert( message, title, options = {}) {
  const obj = messageOptions(options);
      return MessageBox.alert(message, title, obj);
}

export function Prompt( message, title, options = {}) {
  const obj = messageOptions(options);
  return MessageBox.prompt(message, title, obj);
}

export function Msgbox(options = {}) {
  const obj = messageOptions(options);
  return MessageBox.msgbox(obj);
}

function messageOptions(options){
  const obj = {
    dangerouslyUseHTMLString: options.dangerouslyUseHTMLString
      ? options.dangerouslyUseHTMLString
      : false,
    type: options.type,
    iconClass: options.iconClass,
    customClass: options.customClass,
    callback: options.callback,
    showClose: options.showClose ? options.showClose : true,
    beforeClose: options.beforeClose,
    distinguishCancelAndClose: options.distinguishCancelAndClose
      ? options.distinguishCancelAndClose
      : false,
    lockScroll: options.lockScroll ? options.lockScroll : true,
    showCancelButton: options.showCancelButton
      ? options.showCancelButton
      : false,
    showConfirmButton: options.showConfirmButton
      ? options.showConfirmButton
      : true,
    cancelButtonText: options.cancelButtonText
      ? options.cancelButtonText
      : '取消',
    confirmButtonText: options.confirmButtonText
      ? options.confirmButtonText
      : '确定',
    cancelButtonClass: options.cancelButtonClass,
    confirmButtonClass: options.confirmButtonClass,
    closeOnClickModal: options.closeOnClickModal
      ? options.closeOnClickModal
      : true,
    closeOnPressEscape: options.closeOnPressEscape
      ? options.closeOnPressEscape
      : true,
    closeOnHashChange: options.closeOnHashChange
      ? options.closeOnHashChange
      : true,
    showInput: options.showInput ? options.showInput : false,
    inputPlaceholder: options.inputPlaceholder,
    inputType: options.inputType ? options.inputType : 'text',
    inputValue: options.inputValue,
    inputPattern: options.inputPattern,
    inputValidator: options.inputValidator,
    inputErrorMessage: options.inputErrorMessage
      ? options.inputErrorMessage
      : '输入的数据不合法!',
    center: options.center ? options.center : false,
    roundButton: options.roundButton ? options.roundButton : false
  };
  return obj;
}

// LOADING
let loadingInstance = null;
export const OpenLoading = function(options = {}) {
  const obj = {
    target: options.target ? options.target : document.body,
    body: options.body ? options.body : false,
    fullscreen: options.fullscreen ? options.fullscreen : true,
    lock: options.look ? options.look : true,
    background: options.background ? options.background : 'rgba(0, 0, 0, 0.6)',
    spinner: options.spinner ? options.spinner : '',
    text: options.text ? options.text : '拼命加载中',
    customClass: options.customClass ? options.customClass : ''
  };
  loadingInstance = Loading.service(obj);
};

export const CloseLoading = function() {
  if (loadingInstance) {
    loadingInstance.close();
  }
};
