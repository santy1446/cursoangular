import { Component, inject } from "@angular/core";
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { CharacterAddComponent } from "../../components/dragonball/character-add/character-add.component";
import { DragonballService } from "../../services/dragonball.service";

@Component({
    templateUrl: './dragonball-super.component.html',
    selector: 'app-dragonball-super',
    imports: [
        CharacterListComponent,
        CharacterAddComponent
    ]
})
export class DragonballSuperComponent {

    public dragonballService = inject(DragonballService);

}