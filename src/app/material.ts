import{MatButtonModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';

@NgModule({
    imports:[MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatGridListModule, MatInputModule],
    exports:[MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatGridListModule, MatInputModule],
})

export class MaterialModule{}