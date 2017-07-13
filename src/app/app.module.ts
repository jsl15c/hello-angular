import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BindingsComponent } from './bindings/bindings.component';
import { InputComponent } from './input/input.component';
import { FormsModule } from '@angular/forms';
import { PipesComponent } from './pipes/pipes.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { EmojifyPipe } from './pipes/emojify.pipe';
import { DoSearchPipe } from './pipes/do-search.pipe';
import { DirectiveExampleComponent } from './directive-example/directive-example.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BindingsComponent,
    InputComponent,
    PipesComponent,
    CapitalizePipe,
    EmojifyPipe,
    DoSearchPipe,
    DirectiveExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
