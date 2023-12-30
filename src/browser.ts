import { ReSwaggedUI } from './module';

declare global {
    interface Window { ReSwaggedUI: ReSwaggedUI; }
}

window.ReSwaggedUI = window.ReSwaggedUI || ReSwaggedUI;
