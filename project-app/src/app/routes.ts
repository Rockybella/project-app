import { Routes } from '@angular/router';
import { HomeComponent} from './home/home.component'
import { ClientFormComponent } from './client-form/client-form.component';


const routeConfig: Routes = [

    {
        path: '',
        component: HomeComponent,
        data: { title: 'Home page' } // Use 'data' instead of 'title'
      },

    {
        path: 'clients',
        component: ClientFormComponent,
        data: { title: 'Create Clients' } // Use 'data' instead of 'title'
    }

];
export default routeConfig;