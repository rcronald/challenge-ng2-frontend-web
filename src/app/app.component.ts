import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  resources: Resource[] = [{
      id: 'GPU-USA',
      name: 'GPU',
      country: 'USA'
    },
    {
      id: 'Disk-Australia',
      name: 'Disk',
      country: 'Australia'
    },
    {
      id: 'CPU-USA',
      name: 'CPU',
      country: 'USA'
    },
    {
      id: 'Core-USA',
      name: 'Core',
      country: 'USA'
    },
    {
      id: 'RAM-Australia',
      name: 'RAM',
      country: 'Australia'
    }
  ]

  resourceDetailsRecords: ResourceDetails[] = [{
      id: 'GPU-USA',
      city: 'Los Angeles',
      pin: 3123,
      state: 'CA',
      totalCapacity: 100,
      allocated: 20
    },
    {
      id: 'Disk-Australia',
      city: 'Sydney',
      pin: 2000,
      state: 'NSW',
      totalCapacity: 500,
      allocated: 250
    },
    {
      id: 'CPU-USA',
      city: 'Seattle',
      pin: 3176,
      state: 'WA',
      totalCapacity: 200,
      allocated: 180
    },
    {
      id: 'Core-USA',
      city: 'Denver',
      pin: 3178,
      state: 'CO',
      totalCapacity: 300,
      allocated: 250
    },
    {
      id: 'RAM-Australia',
      city: 'Melbourne',
      pin: 3051,
      state: 'VIC',
      totalCapacity: 1000,
      allocated: 700
    }
  ];
}

export interface Resource {
  name: string;
  country: string;
  id: string;
}

export interface ResourceDetails {
  id: string;
  city: string;
  pin: number;
  state: string;
  totalCapacity: number;
  allocated: number;
}
