//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    present: null,
    yield: null,
    yieldval: null,
    year: null,
    future: null,
    presentDisabled: false,
    futureDisabled: true,
    presentClass: '',
    futureClass: 'disabled',
    type:1,
    items: [
      { name: '1', value: '本金', checked: 'true' },
      { name: '2', value: '复利' },
    ]
  },

  present: function(e){
    this.setData({present: e.detail.value});
  },

  yield: function (e) {
    this.setData({
    yieldval: e.detail.value /100 });
  },

  year: function (e) {
    this.setData({ year: e.detail.value });
  },

  future:function(e) {
    this.setData({ future: e.detail.value });
  },

  submit: function (e) {
    console.log(this);

    if(this.data.type == 1){
      var futuree = this.data.present * Math.pow(1 + this.data.yieldval, this.data.year)
      console.log(futuree);
      this.setData({ future: futuree })
    } else {
      var presentt = this.data.future / Math.pow(1 + this.data.yieldval, this.data.year)
      console.log(presentt);
      this.setData({ present: presentt })
    }
  },

  reset: function() {
    this.setData({
        present: null,
        yield: null,
        year: null,
        future: null, 
      }
    )

  },

  radioChange: function (e) {
    this.setData({ type: e.detail.value });
    if (e.detail.value == 2) {
      this.setData({ presentDisabled: true });
      this.setData({ futureDisabled: false });
      this.setData({ presentClass: 'disabled' });
      this.setData({ futureClass: '' });
      this.setData({ present: null });
    } else {
      this.setData({ presentDisabled: false });
      this.setData({ futureDisabled: true });
      this.setData({ presentClass: '' });
      this.setData({ futureClass: 'disabled' });
      this.setData({ future: null });
    }
    
  }

})
