import{MatButtonModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
    imports:[MatButtonModule, MatToolbarModule, MatIconModule],
    exports:[MatButtonModule, MatToolbarModule, MatIconModule],
})

export class MaterialModule{}