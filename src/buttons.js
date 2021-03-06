/* eslint-disable function-paren-newline */
/* eslint-disable operator-linebreak */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable import/no-cycle */
import {
  renderProjects,
  renderTasks,
  resetTextInput,
  createDomElement,
  renderTaskDetails,
  popUpFormValidation,
  renderActiveProject,
  capitalize,
  quickAddValidation,
  renderAllTasksProject,
  orderTask,
} from './dom';
import { hiddenActiveTask, createTask } from './task';
import {
  activeProject,
  projects,
  createProject,
  removeProject,
  setHiddenActiveProject,
  hiddenActiveProject,
  setActiveProject,
} from './project';
import { save } from './localStorage';

const quickAddInput = document.getElementById('quick-add-input');

const newProjectInput = document.getElementById('new-project-input');

// Creates a new Project
function newProject(projectName) {
  projects.push(createProject(capitalize(projectName), []));
  save(projects);
  renderActiveProject(projects[projects.length - 1]);
  renderProjects(projects);
  resetTextInput(newProjectInput);
}

// Quickly add a project
function quickAddProject(projectName, e) {
  e.preventDefault();
  quickAddValidation(projectName, 'add-project-errors');
  if (newProjectInput.value !== '' && newProjectInput.value.length < 26) {
    newProject(projectName);
  }
}

function hidePopUp(id) {
  const popUp = document.getElementById(id);
  popUp.style.display = 'none';
  resetTextInput(
    document.getElementById('pop-up-title-input'),
    document.getElementById('pop-up-description-input'),
    document.getElementById('pop-up-due-date-input'),
  );
}

// Uses input to edit project name
function editProjectName() {
  const input = document.getElementById('edit-project-name-input');
  hiddenActiveProject.editName(input.value);
  save(projects);
  renderProjects(projects);
  resetTextInput(input);
  hidePopUp('edit-project-popup');
}

// Create a card. Can be used for a task or a project
function createCardBtn(type, elClass, func) {
  const button = createDomElement(type, elClass);
  button.addEventListener('click', (e) => func(e));
  return button;
}

// Change pop-up title

function changePopUpTitle(newTitle) {
  const title = document.getElementById('pop-up-title');
  title.textContent = newTitle;
}

// Checks radio button with tasks previous selection
function checkRadioBtn(task) {
  document.querySelector(`input[value="${task.priority}"`).checked = true;
}

// Makes the "Create new task pop-up" visible
function showTaskPopUp(title) {
  changePopUpTitle(title);
  const popUp = document.getElementById('task-popup');
  if (popUp.style.display !== 'block') {
    document.querySelector('input[value="0"]').checked = true;
    popUp.style.display = 'block';
  } else popUp.style.display = 'none';
  if (title === 'Edit Task') {
    document.getElementById('pop-up-title-input').value =
      hiddenActiveTask.title;
    document.getElementById('pop-up-description-input').value =
      hiddenActiveTask.description;
    document.getElementById('pop-up-due-date-input').value =
      hiddenActiveTask.dueDate;
    checkRadioBtn(hiddenActiveTask);
  }
}

// Makes the "Create edit project pop-up" visible
function showEditProjectPopUp(e) {
  const popUp = document.getElementById('edit-project-popup');
  const input = document.getElementById('edit-project-name-input');
  if (popUp.style.display !== 'block') {
    const index = e.composedPath()[0].dataset.editProjectBtn;

    input.value = projects[index].title;
    popUp.style.display = 'block';
    setHiddenActiveProject(projects[index]);
  } else popUp.style.display = 'none';
}

// Deletes a task globally if working from "All Tasks" Project
function globalDeleteTask(index) {
  if (activeProject.title === 'All Tasks') {
    const { id } = activeProject.tasks[index];
    projects.forEach((project) => {
      project.tasks.forEach((task) => {
        if (task.id === id) {
          project.removeTask(task);
        }
      });
    });
  }
}
// Deletes a the relative task
function deleteTask(e) {
  e.stopPropagation();
  const index = e.composedPath()[0].dataset.deleteBtn;
  if (hiddenActiveTask === activeProject.tasks[index]) {
    document.getElementById('details-panel').style.display = 'none';
  }
  globalDeleteTask(index);
  activeProject.removeTask(activeProject.tasks[index]);
  renderTasks(activeProject.tasks);
  save(projects);
}

// Deletes the relative Project
function deleteProject(e) {
  const key = Object.keys(e.composedPath()[0].dataset)[0];
  const index = parseInt(e.composedPath()[0].dataset[key], 10);
  if (activeProject === projects[index]) {
    document.getElementById('details-panel').style.display = 'none';
    if (index === 0) {
      setActiveProject(projects[index + 1]);
    } else {
      setActiveProject(projects[index - 1]);
    }
  }
  removeProject(index);
  save(projects);
  renderProjects(projects);
  if (activeProject !== undefined) {
    renderActiveProject(activeProject);
  } else {
    renderAllTasksProject();
  }
  document.getElementById('delete-project-prompt').style.display = 'none';
}

// Toggles a task as "Done"
function toggleTaskDone(e) {
  e.stopPropagation();
  const index = e.composedPath()[0].dataset.doneBtn;
  const task = activeProject.tasks[index];
  task.toggleDone();
  if (task.isDone) {
    activeProject.addTask(task);
    activeProject.removeTask(task);
  } else {
    orderTask(activeProject, task);
  }
  renderTasks(activeProject.tasks);
  save(projects);
}

// Use quickAdd text input to create a new task with only a title
function quickAdd(project, e) {
  e.preventDefault();
  quickAddValidation(quickAddInput.value, 'add-task-errors');
  if (activeProject.title !== 'All Tasks') {
    if (quickAddInput.value !== '' && quickAddInput.value.length < 26) {
      if (projects[0] === undefined) {
        newProject('Personal');
        setActiveProject(projects[0]);
      }
      const task = createTask(
        capitalize(quickAddInput.value),
        '',
        undefined,
        '0',
        undefined,
        Math.random(1),
      );
      project.addTask(task);
      save(projects);
      renderTasks(project.tasks);
      resetTextInput(quickAddInput);
    }
  }
}

// Creates a task with a title, description, due date and priority
function fullAdd(project) {
  if (activeProject.title !== 'All Tasks') {
    if (projects[0] === undefined) {
      newProject('Personal');
      setActiveProject(projects[0]);
    }
    const task = createTask(
      document.getElementById('pop-up-title-input').value,
      document.getElementById('pop-up-description-input').value,
      document.getElementById('pop-up-due-date-input').value,
      document.querySelector('input[name="priority"]:checked').value,
      undefined,
      Math.random(1),
    );
    project.addTask(task);
    save(projects);
    renderTasks(project.tasks);
    renderTaskDetails(task);
  }
}

// Edit the task
function editTask(project) {
  const checkedPriority = document.querySelector(
    'input[name="priority"]:checked',
  );

  const title = document.getElementById('pop-up-title-input').value;
  const description = document.getElementById('pop-up-description-input').value;
  const dueDate = document.getElementById('pop-up-due-date-input').value;
  const priority = checkedPriority === null ? 0 : checkedPriority.value;

  hiddenActiveTask.editTitle(title);
  hiddenActiveTask.editDescription(description);
  hiddenActiveTask.editDueDate(dueDate);
  hiddenActiveTask.editPriority(priority);
  save(projects);
  renderTasks(project.tasks);
  renderTaskDetails(hiddenActiveTask);
}

// Decides to create a new task or edit an existing one
function createOrEditTask(project) {
  popUpFormValidation();
  const errors = document.getElementById('pop-up-errors');
  if (errors.textContent === '') {
    const title = document.getElementById('pop-up-title').textContent;
    if (title === 'Create New Task') {
      fullAdd(project);
    } else {
      editTask(project);
    }
    hidePopUp('task-popup');
    resetTextInput(
      document.getElementById('pop-up-title-input'),
      document.getElementById('pop-up-description-input'),
      document.getElementById('pop-up-due-date-input'),
    );
  }
}

function hideDiv(id) {
  document.getElementById(id).style.display = 'none';
}

// Edit project name
const editProjectNameSubmit = document.getElementById(
  'edit-project-name-submit',
);
editProjectNameSubmit.addEventListener('click', () => editProjectName());

// Cancel edit Project name
const cancelEditProjectName = document.getElementById(
  'edit-project-name-cancel',
);
cancelEditProjectName.addEventListener('click', () =>
  hidePopUp('edit-project-popup'),
);

// All Tasks Project
const allTasksProjectCard = document.getElementById('all-tasks-project');
allTasksProjectCard.addEventListener('click', () => renderAllTasksProject());

// Create Tasks button opens pop-up and allows a full task to be added
const createTaskBtn = document.getElementById('create-task-btn');
createTaskBtn.addEventListener('click', () => showTaskPopUp('Create New Task'));

// Quickly add a task with only the title, but no other information
const quickAddBtn = document.getElementById('quick-add-btn');
quickAddBtn.addEventListener('click', (e) => quickAdd(activeProject, e));

// Add a task with title, description, due date and priority
const fullAddBtn = document.getElementById('full-add-btn');
fullAddBtn.addEventListener('click', () => createOrEditTask(activeProject));

// Cancel new/edit task pop-up
const taskPopUpCancel = document.getElementById('cancel-full-add-btn');
taskPopUpCancel.addEventListener('click', () => hidePopUp('task-popup'));

// Opens edit task pop-up
const editTaskBtn = document.getElementById('edit-task-btn');
editTaskBtn.addEventListener('click', () => showTaskPopUp('Edit Task'));

// Add a new Project
const newProjectBtn = document.getElementById('new-project-btn');
newProjectBtn.addEventListener('click', (e) =>
  quickAddProject(newProjectInput.value, e),
);

// Pop-up confirmation to delete a project
const cancelProjectYesBtn = document.getElementById('delete-project-yes');
cancelProjectYesBtn.addEventListener('click', (e) => deleteProject(e));

const cancelProjectNoBtn = document.getElementById('delete-project-no');
cancelProjectNoBtn.addEventListener('click', () =>
  hideDiv('delete-project-prompt'),
);

export {
  newProject,
  quickAdd,
  createCardBtn,
  deleteTask,
  toggleTaskDone,
  deleteProject,
  showEditProjectPopUp,
};
