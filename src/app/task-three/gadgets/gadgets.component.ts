import { Component, OnInit } from '@angular/core';
import { Gadget } from '../gadget.model';

@Component({
  selector: 'app-gadgets',
  templateUrl: './gadgets.component.html',
  styleUrls: ['./gadgets.component.scss'],
})
export class GadgetsComponent implements OnInit {
  gadgets: Gadget[] = [
    {
      id: 1,
      name: 'Apple Watch 7',
      description:
        'Big screen. Huge impact. The challenge was to create a bigger display while barely expanding the dimensions of the watch itself. To do so, the display was completely re‑engineered reducing the borders by 40%, allowing for more screen area than both Series 6 and Series 3. Now that’s something to smile about.',
      price: 600,
      createdAt: new Date(),
      imgUrl:
        'https://images.unsplash.com/photo-1598900785046-724f0370f319?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80 ',
    },
    {
      id: 2,
      name: 'Airpods max 2',
      description:
        'As some of the best headphones on the market, the AirPods Max strike the ultimate balance of sound quality and style. Priced at $549, they are far from the best cheap headphones, but the AirPods Max still managed to amass a fan base and remain a popular (albeit, premium) choice for iPhone users.In December 2022, the AirPods Max turn two years old. That might make you wonder whether the AirPods Max 2, or second-gen AirPods Max, are on the way. You might also want to know how they will compare to the Apple AirPods Pro or Apple AirPods 3, some of the best wireless headphones also sold by Apple.',
      price: 600,
      createdAt: new Date(),
      imgUrl:
        'https://images.unsplash.com/photo-1638803782506-d975a6809f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
    },
    {
      id: 3,
      name: 'iRobot Roomba i3 EVO',
      description:
        'Robot vacuums never get bored or distracted, and they don’t mind cleaning every day. So with very little effort on your part, your floors can stay constantly tidy. We’ve tested dozens of robots, from cheap models that bump around randomly to fancy machines that empty themselves and (usually) steer around dog poop. First, consider the strong, durable, smart-enough iRobot Roomba i3 EVO.',
      price: 600,
      createdAt: new Date(),
      imgUrl:
        'https://images.unsplash.com/photo-1590164409291-450e859ccb87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
    },
    {
      id: 4,
      name: 'Google home mini',
      description:
        'TThe Home Mini comes in three colors — light gray, dark gray, and coral red — all entirely inoffensive and designed to blend discreetly into a modern, HGTV-slash-Apple-Store home décor. The top of the Mini is covered in a textured fabric, which looks great when it’s brand-new, but I worry that it will become a dust collector in short time. Having to vacuum the top of my smart speaker instead of just wiping it off with a rag is something I never thought I’d have to consider, yet here we are. Cat owners may also have to contend with their pets viewing the Mini as a toy or scratching pad.',
      price: 600,
      createdAt: new Date(),
      imgUrl:
        'https://images.unsplash.com/photo-1507646227500-4d389b0012be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
    },
  ];
  constructor() {}

  ngOnInit(): void {
    if (localStorage.getItem('gadgets')) {
      this.gadgets = JSON.parse(localStorage.getItem('gadgets') || '');
    } else {
      localStorage.setItem('gadgets', JSON.stringify(this.gadgets));
    }
  }

  handleDelete(gadget: Gadget) {
    this.gadgets = this.gadgets.filter((f) => f.id !== gadget.id);
    localStorage.setItem('gadgets', JSON.stringify(this.gadgets));
  }
}
