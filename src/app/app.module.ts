import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/template/header/header.component';
import { FooterComponent } from './component/template/footer/footer.component';
import { NavComponent } from './component/template/nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './component/template/main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";
import { PublicComponent } from './component/public/public/public.component';
import { LoginComponent } from './component/public/login/login.component';
import { SingupComponent } from './component/public/singup/singup.component';
import { EntradaListComponent } from './component/view/entrada/entrada-list/entrada-list.component';
import { EstoqueListComponent } from './component/view/estoque/estoque-list/estoque-list.component';
import { VendaListComponent } from './component/view/venda/venda-list/venda-list.component';
import { ProdutoListComponent } from './component/view/produto/produto-list/produto-list.component';
import { ProdutoFormComponent } from './component/view/produto/produto-form/produto-form.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { ProdutoUpdateComponent } from './component/view/produto/produto-update/produto-update.component';
import { ConfirmDeleteComponent } from './component/template/confirm-delete/confirm-delete.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    MainComponent,
    PublicComponent,
    LoginComponent,
    SingupComponent,
    EntradaListComponent,
    EstoqueListComponent,
    VendaListComponent,
    ProdutoListComponent,
    ProdutoFormComponent,
    ProdutoUpdateComponent,
    ConfirmDeleteComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatTableModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
