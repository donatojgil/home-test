import { Page } from "@playwright/test";

const USER = 'johndoe19';
const PASSWORD = 'supersecret';
const LOGIN_URL = 'http://localhost:3100/login'

class Login {
    constructor(page) {
        this.page = page;
        this.username = page.locator('#username');
        this.password = page.locator('#password');
        this.signin = page.getByRole('button', { name: 'Sign In' });
        this.message = page.locator('#message');

    }

    async navigateTo() {
        await this.page.goto(LOGIN_URL);
    }

    async fillUsername(user) {
        await this.username.fill(user);
    }

    async fillPassword(pwd) {
        await this.password.fill(pwd);
    }

    async loginApp() {
        await this.navigateTo();
        await this.fillUsername(USER);
        await this.fillPassword(PASSWORD);
        await this.signin.click();
    }
};

module.exports = Login;