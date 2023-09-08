const app = Vue.createApp({
    data() {
        return {
            showMessage: false,
            newTask: '',
            tasks: []
        }
    },
    methods: {
        showWelcomeMessage() {
            this.showMessage = !this.showMessage;
        },
        addTask() {
            if (this.newTask.trim() !== '') {
                this.tasks.push(this.newTask);
                this.newTask = '';
            }
        },
        removeTask(index) {
            this.tasks.splice(index, 1);
        }
    }
});

// Check if the app element exists on the page
const appElement = document.getElementById('app');

if (appElement) {
    // Mount the app on the element with id "app" (for the main page)
    app.mount('#app');
} else {
    // Mount the app on the element with id "todo-app" (for the To-Do List page)
    app.mount('#todo-app');
}

