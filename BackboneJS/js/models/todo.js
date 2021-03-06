var app = app || {};

// Todo 모델
// 우리의 기본 Todo 모델은 title order completed 속성을 가진다.
$(function() {
  app.Todo = Backbone.Model.extend({

    // default 에 기본 속성을 정의함으로써 todo 항목이 생성될 때 title 과 completed 키를
    // 가지고 있음을 보장할 수 있다.

    defaults: {
      title: '',
      completed: false
    },
    // 이 todo 항목의 completed 상태를 토글시킨다.
    toggle: function() {
      console.log('todo toggle : '+!this.get('completed'));
      this.save({
        completed: !this.get('completed')
      });
    }
  });
});
