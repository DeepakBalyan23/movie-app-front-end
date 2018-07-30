import{MatButtonModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
    imports:[MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatGridListModule],
    exports:[MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatGridListModule],
})

export class MaterialModule{}