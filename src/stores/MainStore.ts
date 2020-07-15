import {observable, action, computed} from 'mobx';
import Loop from '../models/Loop';
import Project from '../models/Project';
import {defaultLoopTemplate} from '../models/templates/LoopTemplate';

export default class MainStore {
	@observable currentProject: Project | null = null;

	@observable projects: Project[] = [];
	@observable lastProjectId = 0;

	@observable currentLoop: Loop;

	@observable _intervalId: number | null = null;

	constructor(loop: Loop) {
		this.currentLoop = loop;
	}

	@computed
	get isTicking() {
		return this._intervalId !== null;
	}

	@computed
	get currentTimer() {
		return this.currentLoop.currentTimer;
	}

	@action
	addProject(name = 'Project name'): Project {
		const project = new Project(this.lastProjectId, name, defaultLoopTemplate);
		this.projects.push(project);
		this.lastProjectId += 1;
		return project;
	}

	@action
	deleteProject(id: number) {
		if (this.currentProject.id === id) {
			this.unassignProject();
		}

		this.projects = this.projects.filter((project) => project.id !== id);
	}

	@action
	startProjectLoop(project: Project) {
		this.currentLoop = Loop.fromTemplate(project.loopTemplate);
		this.currentProject = project;
	}

	@action
	unassignProject() {
		this.currentProject = null;
		this.currentLoop = Loop.fromTemplate(defaultLoopTemplate);
	}

	@action
	switchProject(project: Project) {
		this.currentProject = project;
		if (!this.isTicking) {
			this.currentLoop = Loop.fromTemplate(project.loopTemplate);
		}
	}

	@action
	startTimer() {
		if (this._intervalId !== null) {
			throw new Error('Timer has already started');
		}

		this._intervalId = window.setInterval(() => {
			if (this.currentTimer.isCompleted) {
				this.stopTimer();
			} else {
				this.currentTimer.increment();
				if (this.currentProject !== null) {
					this.currentProject.totalCompletedSeconds += 1;
				}
			}
		}, 1000);
	}

	@action
	stopTimer() {
		if (this._intervalId === null) {
			throw new Error('Timer has already been stopped');
		}

		window.clearInterval(this._intervalId);
		this._intervalId = null;
	}

	@action
	resetTimer() {
		this.currentTimer.reset();
	}

	@action
	switchToNextTimer() {
		this.currentLoop.switchToNextTimer();
	}

	@action
	switchToPreviousTimer() {
		this.currentLoop.switchToPreviousTimer();
	}
}
