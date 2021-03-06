/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
/* eslint-disable operator-linebreak */
import {
  setActiveProject,
  projects,
  activeProject,
  createProject,
  createAllTasksArray,
} from './project';
import {
  createCardBtn,
  deleteTask,
  toggleTaskDone,
  deleteProject,
  showEditProjectPopUp,
} from './buttons';
import { setHiddenActiveTask } from './task';

// Assign Dataset to Project Card
function assignProjectDataIndex(index, card, editBtn, deleteBtn) {
  card.dataset.project = index;
  editBtn.dataset.editProjectBtn = index;
  deleteBtn.dataset.deleteProjectBtn = index;
}

// Renders the active projects
function selectProject(project) {
  const projectTitle = document.getElementById('project-title');
  projectTitle.textContent = project.title;
}

// Resets all elements with a certain class
function resetElements(elClass) {
  const elements = document.querySelectorAll(elClass);
  elements.forEach((element) => element.remove());
}

// Appends multiple elements to a div
function appendToParent(parent, ...args) {
  args.forEach((arg) => parent.appendChild(arg));
}

// Create a DOM element with relative class
function createDomElement(type, elClass) {
  const element = document.createElement(`${type}`);
  element.classList.add(`${elClass}`);
  return element;
}

// Renders Task Details on details panel
function renderTaskDetails(task) {
  const title = document.getElementById('details-title');
  const description = document.getElementById('details-description');
  const dueDate = document.getElementById('details-due-date');
  const priority = document.getElementById('details-priority');
  document.getElementById('details-panel').style.display = 'block';
  title.textContent = task.title;
  description.textContent = task.description ? `${task.description}` : '';
  dueDate.textContent = task.dueDate ? `Due Date: ${task.dueDate}` : '';
  if (task.priority === '1') {
    priority.textContent = 'Priority: !';
  } else if (task.priority === '2') {
    priority.textContent = 'Priority: !!';
  } else if (task.priority === '3') {
    priority.textContent = 'Priority: !!!';
  }
  setHiddenActiveTask(task);
}

// Adds task-done and 'task-title-done' class to task card and title
function taskDone(task, card, title) {
  if (task.isDone === true) {
    card.classList.add('task-done');
    title.classList.add('task-title-done');
  } else {
    card.classList.remove('task-done');
    title.classList.remove('task-title-done');
  }
}

// Assigns dataset to task card
function assignTaskDataIndex(index, card, doneBtn, deleteBtn, title) {
  // eslint-disable-next-line no-param-reassign
  card.dataset.task = index;
  // eslint-disable-next-line no-param-reassign
  doneBtn.dataset.doneBtn = index;
  // eslint-disable-next-line no-param-reassign
  deleteBtn.dataset.deleteBtn = index;
  // eslint-disable-next-line no-param-reassign
  title.dataset.title = index;
}

// Create a new Task Card
function createTaskCard(task) {
  const index = document.getElementById('task-list').children.length;
  const card = createDomElement('div', 'task-card');
  const doneBtn = createCardBtn('button', 'small-btn', toggleTaskDone);
  const deleteBtn = createCardBtn('button', 'small-btn', deleteTask);
  const title = createDomElement('div', 'task-title');
  card.classList.add(`priority-${task.priority}`);
  taskDone(task, card, title);
  doneBtn.innerHTML = '&#10003';
  deleteBtn.innerHTML = '&#10007;';
  title.textContent = task.title;
  appendToParent(card, doneBtn, title, deleteBtn);
  assignTaskDataIndex(index, card, doneBtn, deleteBtn, title);
  card.addEventListener('click', () => renderTaskDetails(task));
  return card;
}

// Append a task card
function appendTask(task) {
  const list = document.getElementById('task-list');
  const card = createTaskCard(task);
  list.appendChild(card);
}

// Append all task cards
function appendAllTasks(tasks) {
  if (tasks !== undefined) {
    tasks.forEach((task) => appendTask(task));
  }
}

// Renders Projects
function renderTasks(tasks) {
  resetElements('.task-card');
  appendAllTasks(tasks);
}

// Order a tasks
function orderTask(project, task) {
  for (let i = 0; i < project.tasks.length; i += 1) {
    if (project.tasks[i].isDone) {
      project.removeTask(task);
      if (i !== 0 && project.tasks[i - 1].isDone) {
        project.tasks.splice(i - 1, 0, task);
      } else {
        project.tasks.splice(i, 0, task);
      }
      break;
    }
  }
}

// Order all tasks
function orderAllTasks(project) {
  for (let i = 0; i < project.tasks.length; i += 1) {
    const task = project.tasks[i];
    orderTask(project, task);
  }
}

// Renders the active projects tasks
function renderActiveProject(project) {
  setActiveProject(project);
  selectProject(project);
  orderAllTasks(project);
  renderTasks(project.tasks);
}

// Show delete project prompt pop-up
function showDeleteProject(e) {
  e.stopPropagation();
  const key = Object.keys(e.composedPath()[0].dataset)[0];
  const index = parseInt(e.composedPath()[0].dataset[key], 10);
  // Only deletes an empty project without prompt
  if (projects[index].tasks[0] === undefined) {
    deleteProject(e);
  } else {
    // Project-card dataset value is assigned to the "yes" button in the prompt
    document.getElementById('delete-project-yes').dataset.event =
      e.composedPath()[0].dataset.deleteProjectBtn;
    document.getElementById('delete-project-prompt').style.display = 'block';
  }
}

// Create a Project Card
function createProjectCard(project) {
  const index = document.getElementById('project-list').children.length - 1;
  const card = createDomElement('div', 'project-card');
  const deleteBtn = createCardBtn('button', 'small-btn', showDeleteProject);
  const title = createDomElement('div', 'project-title');
  const editBtn = createCardBtn('button', 'small-btn', showEditProjectPopUp);
  deleteBtn.innerHTML = '&#10007;';
  editBtn.innerHTML = '&#9998';
  title.textContent = project.title;
  appendToParent(card, editBtn, title, deleteBtn);
  assignProjectDataIndex(index, card, editBtn, deleteBtn);
  card.addEventListener('click', () => {
    renderActiveProject(project);
  });
  return card;
}

// Appends Project Card to Project List
function appendProject(project) {
  const list = document.getElementById('project-list');
  const card = createProjectCard(project);
  list.appendChild(card);
}

// Appends all Project Card to Project List
function appendAllProjects() {
  projects.forEach((project) => appendProject(project));
}

// Renders Projects
function renderProjects() {
  resetElements('.project-card');
  appendAllProjects();
}

// Resets text input
function resetTextInput(...args) {
  args.forEach((arg) => {
    // eslint-disable-next-line no-param-reassign
    arg.value = '';
  });
}

// Title validation
function titleValidation(title) {
  let error;
  if (title === '') {
    error = 'Insert title';
  } else if (title.length > 25) {
    error = 'Title max 25 characters';
  }
  return error;
}

// Due Date not in past
// eslint-disable-next-line consistent-return
function dueDateValidation(dueDate) {
  const today = new Date().toISOString().slice(0, 10);
  // eslint-disable-next-line operator-linebreak
  const inputDate =
    dueDate !== '' ? new Date(dueDate).toISOString().slice(0, 10) : '';
  if (inputDate !== '' && inputDate < today) {
    return 'Due Date is in the past';
  }
}

// Show form Validation errors
function showErrors(errorList, id) {
  const errors = document.getElementById(id);
  errors.textContent = errorList.join(' | ');
  if (errors.textContent === ' | ') {
    errors.textContent = '';
  }
  if (errorList.includes(undefined)) {
    errors.textContent = errors.textContent.replaceAll('|', '');
  }
}

// Form validation

function popUpFormValidation() {
  const errorList = [];
  const popUpTitle = document.getElementById('pop-up-title').textContent;
  const title = document.getElementById('pop-up-title-input').value;
  const dueDate = document.getElementById('pop-up-due-date-input').value;
  if (activeProject.title === 'All Tasks' && popUpTitle === 'Create New Task') {
    errorList.push('Cannot add tasks to "All Tasks"');
  } else {
    errorList.push(titleValidation(title));
  }
  errorList.push(dueDateValidation(dueDate));
  showErrors(errorList, 'pop-up-errors');
}

function quickAddValidation(title, errorsId) {
  const errors = document.getElementById(errorsId);
  errors.textContent =
    activeProject.title === 'All Tasks' && errorsId === 'add-task-errors'
      ? 'Cannot add tasks to "All Tasks"'
      : titleValidation(title);
}

// capitalize first letter
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Renders "All Tasks" project
function renderAllTasksProject() {
  const allTasksProject = createProject('All Tasks', createAllTasksArray());
  orderAllTasks(allTasksProject);
  renderActiveProject(allTasksProject);
}

export {
  renderProjects,
  renderTasks,
  selectProject,
  resetTextInput,
  createDomElement,
  renderTaskDetails,
  popUpFormValidation,
  renderActiveProject,
  capitalize,
  quickAddValidation,
  orderTask,
  renderAllTasksProject,
};
