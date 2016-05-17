import React     from 'react';
import ReactDOM  from 'react-dom';
import expect    from 'expect';
import $         from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import TodoApp   from 'TodoApp';

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  describe('handleAddTask', () => {
    it('should add a task to the todos list', () => {
      let taskText = "Add a new task",
          todoapp  = TestUtils.renderIntoDocument(<TodoApp />);

      todoapp.setState({ todos: [] });
      todoapp.handleAddTask(taskText);

      expect(todoapp.state.todos.length).toBe(1);
      expect(todoapp.state.todos[0].text).toBe(taskText);
    });
  });
});