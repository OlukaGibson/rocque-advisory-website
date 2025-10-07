import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NgOptimizedImage, CommonModule } from '@angular/common';
import type { Project } from '../../shared/interfaces';
import { PROJECTS } from '../../shared/constants';

@Component({
  selector: 'rocque-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage, CommonModule]
})
export class ProjectsComponent {
  protected readonly projects = signal<readonly Project[]>(PROJECTS);
  protected readonly selectedProject = signal<Project | null>(null);

  protected onProjectClick(project: Project): void {
    this.selectedProject.set(project);
  }

  protected closeModal(): void {
    this.selectedProject.set(null);
  }

  protected onProjectKeyDown(event: KeyboardEvent, project: Project): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.onProjectClick(project);
    }
  }

  protected onModalKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.closeModal();
    }
  }
}
