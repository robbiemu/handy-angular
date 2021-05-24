import { Component } from "@angular/core";

@Component({
  selector: 'storybook-safe-pipe',
  template: `<div>
    <header>pipe</header>
    <ul>
      <li>
        <span class="without-pipe">Without pipe: <a [href]="url">link</a></span>
      </li>
      <li>
        <span class="with-pipe">With pipe: <a [href]="url | safe">link</a></span>
      </li>
    </ul>
  </div>

`
})
export class MockSafeComponent {
  url="https://www.google.com"
}
