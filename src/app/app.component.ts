import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'angular-w2-2201681018';

  public index = 0;
  public totalRatings = 0;
  public numRatings = 0;
  public currentTitle = '';
  public currentAuthor = '';
  public currentBlurb = '';
  public allBooksRated = false;

public Library = [
  {
    Title: 'To Kill a Mockingbird',
    Blurb: 'The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it. To Kill A Mockingbird became both an instant bestseller and a critical success when it was first published in 1960. It went on to win the Pulitzer Prize in 1961 and was later made into an Academy Award-winning film, also a classic. Compassionate, dramatic, and deeply moving, "To Kill A Mockingbird" takes readers to the roots of human behavior - to innocence and experience, kindness and cruelty, love and hatred, humor and pathos. Now with over 18 million copies in print and translated into forty languages, this regional story by a young Alabama woman claims universal appeal. Harper Lee always considered her book to be a simple love story. Today it is regarded as a masterpiece of American literature.',
    Author: 'Harper Lee',
    Rating: 0,

    totalRating: 0,
    numRatings: 0
  },
  {
    Title: 'The Hunger Games',
    Blurb: 'Could you survive on your own in the wild, with every one out to make sure you dont live to see the morning? In the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlying districts. The Capitol is harsh and cruel and keeps the districts in line by forcing them all to send one boy and one girl between the ages of twelve and eighteen to participate in the annual Hunger Games, a fight to the death on live TV. Sixteen-year-old Katniss Everdeen, who lives alone with her mother and younger sister, regards it as a death sentence when she steps forward to take her sisters place in the Games. But Katniss has been close to dead before—and survival, for her, is second nature. Without really meaning to, she becomes a contender. But if she is to win, she will have to start making choices that weight survival against humanity and life against love.',
    Author: 'Suzanne Collins',
    Rating: 0,

    totalRating: 0,
    numRatings: 0
  },
  {
    Title: 'The Lord of the Rings',
    Blurb: 'In J.R.R. Tolkiens classic trilogy, a young hobbit named Frodo Baggins embarks on a perilous journey to destroy a powerful ring before it falls into the hands of the dark lord Sauron. Joined by loyal friends, Frodo faces epic battles and daunting challenges in a quest to save Middle-earth from darkness.',
    Author: 'J.R.R. Tolkien',
    Rating: 0,
    
    totalRating: 0,
    numRatings: 0
  },
  {
    Title: 'The Little Prince',
    Blurb: 'A timeless tale of friendship, adventure, and the wisdom of the heart. Follow the Little Prince as he travels from planet to planet, encountering strange characters and learning valuable lessons about life and love.',
    Author: 'Antoine de Saint-Exupery',
    Rating: 0,
    
    totalRating: 0,
    numRatings: 0
  },
  {
    Title: 'The Bible',
    Blurb: 'The Bible is a compilation of sacred texts that hold profound religious significance for billions of people worldwide. Divided into the Old and New Testaments, it encompasses a diverse range of literary genres, including history, poetry, prophecy, letters, and teachings. Its narratives trace the relationship between humanity and the divine, offering moral guidance, spiritual wisdom, and insights into the nature of God. Across cultures and centuries, the Bible continues to inspire faith, shape beliefs, and influence cultures.',
    Author: 'Jesus',
    Rating: 0,
    
    totalRating: 0,
    numRatings: 0
  },
  {
    Title: 'Harry Potter and the Sorcerers Stone',
    Blurb: 'Harry Potter has never been the star of a Quidditch team, scoring points while riding a broom far above the ground. He knows no spells, has never helped to hatch a dragon, and has never worn a cloak of invisibility. All he knows is a miserable life with the Dursleys, his horrible aunt and uncle, and their abominable son, Dudley—a great big swollen spoiled bully. Harrys room is a tiny closet at the foot of the stairs, and he hasnt had a birthday party in eleven years. But all that is about to change when a mysterious letter arrives by owl messenger: a letter with an invitation to an incredible place that Harry—and anyone who reads about him—will find unforgettable. For its there that he finds not only friends, aerial sports, and magic in everything from classes to meals, but a great destiny thats been waiting for him... if Harry can survive the encounter.',
    Author: 'J.K. Rowling',
    Rating: 0,
    
    totalRating: 0,
    numRatings: 0
  },
  {
    Title: 'A Tale of Two Cities',
    Blurb: 'It was the best of times, it was the worst of times...  Charles Dickenss A Tale of Two Cities portrays a world on fire, split between Paris and London during the brutal and bloody events of the French Revolution. After eighteen years as a political prisoner in the Bastille the aging Dr Manette is finally released and reunited with his daughter in England. There, two very different men, Charles Darnay, an exiled French aristocrat, and Sydney Carton, a disreputable but brilliant English lawyer, become enmeshed through their love for Lucie Manette. From the tranquil lanes of London, they are all drawn against their will to the vengeful, bloodstained streets of Paris at the height of the Reign of Terror and soon fall under the lethal shadow of La Guillotine. This edition uses the text as it appeared in its first serial publication in 1859 to convey the full scope of Dickenss vision, and includes the original illustrations by H.K. Browne (Phiz). Richard Maxwells introduction discusses the intricate interweaving of epic drama with personal tragedy. For more than seventy years, Penguin has been the leading publisher of classic literature in the English-speaking world. With more than 1,700 titles, Penguin Classics represents a global bookshelf of the best works throughout history and across genres and disciplines. Readers trust the series to provide authoritative texts enhanced by introductions and notes by distinguished scholars and contemporary authors, as well as up-to-date translations by award-winning translators.',
    Author: 'Charles Dickens',
    Rating: 0,
    
    totalRating: 0,
    numRatings: 0
  },
  {
    Title: 'The Lion, the Witch and the Wardrobe',
    Blurb: 'Don’t miss one of America’s top 100 most-loved novels, selected by PBS’s The Great American Read. A beautiful paperback edition of The Lion, the Witch and the Wardrobe, book two in the classic fantasy series The Chronicles of Narnia. Four adventurous siblings—Peter, Susan, Edmund, and Lucy Pevensie—step through a wardrobe door and into the land of Narnia, a land frozen in eternal winter and enslaved by the power of the White Witch. But when almost all hope is lost, the return of the Great Lion, Aslan, signals a great change . . . and a great sacrifice. Open the door and enter a new world! The Lion, the Witch and the Wardrobe is the second book in C. S. Lewiss classic fantasy series, which has been captivating readers of all ages with a magical land and unforgettable characters for over sixty years. This is a stand-alone read, but if you would like to discover more about Narnia, pick up The Horse and His Boy, the third book in The Chronicles of Narnia.',
    Author: 'C. S. Lewis',
    Rating: 0,
    
    totalRating: 0,
    numRatings: 0
  },
  {
    Title: 'The Da Vinci Code',
    Blurb: 'While in Paris on business, Harvard symbologist Robert Langdon receives an urgent late-night phone call: the elderly curator of the Louvre has been murdered inside the museum. Near the body, police have found a baffling cipher. While working to solve the enigmatic riddle, Langdon is stunned to discover it leads to a trail of clues hidden in the works of Da Vinci—clues visible for all to see and yet ingeniously disguised by the painter. Langdon joins forces with a gifted French cryptologist, Sophie Neveu, and learns the late curator was involved in the Priory of Sion—an actual secret society whose members included Sir Isaac Newton, Botticelli, Victor Hugo, and Da Vinci, among others. In a breathless race through Paris, London, and beyond, Langdon and Neveu match wits with a faceless powerbroker who seems to anticipate their every move. Unless Langdon and Neveu can decipher the labyrinthine puzzle in time, the Priorys ancient secret—and an explosive historical truth—will be lost forever.',
    Author: 'Dan Brown',
    Rating: 0,
    
    totalRating: 0,
    numRatings: 0
  },
  {
    Title: 'Queen of Shadows',
    Blurb: 'Everyone Celaena Sardothien loves has been taken from her. But she’s at last returned to the empire—for vengeance, to rescue her once-glorious kingdom, and to confront the shadows of her past…  She has embraced her identity as Aelin Galathynius, Queen of Terrasen. But before she can reclaim her throne, she must fight. She will fight for her cousin, a warrior prepared to die for her. She will fight for her friend, a young man trapped in an unspeakable prison. And she will fight for her people, enslaved to a brutal king and awaiting their lost queen’s triumphant return. The fourth volume in the New York Times bestselling series continues Celaena’s epic journey and builds to a passionate, agonizing crescendo that might just shatter her world.',
    Author: 'Sarah J. Maas',
    Rating: 0,
    
    totalRating: 0,
    numRatings: 0
  }
]

public currentBook = this.Library[this.index];

rateBook(rating: number) {
  this.currentBook.Rating = rating;
  this.totalRatings += rating;
  this.numRatings++;

  this.averageCurrentRating(rating);
  this.saveChanges();
  this.nextBook();
}

saveChanges(){
  if(this.currentTitle !== '')
  this.currentBook.Title = this.currentTitle;
  if(this.currentBlurb !== '')
  this.currentBook.Blurb = this.currentBlurb;
  if(this.currentAuthor !== '')
  this.currentBook.Author = this.currentAuthor;

  this.currentTitle = '';
  this.currentBlurb = '';
  this.currentAuthor = '';
}

nextBook(){
  this.index++;

  if (this.index >= this.Library.length) {
    this.index = 0;
    this.allBooksRated = true;
  }

  this.currentBook = this.Library[this.index];
}

previousBook(){
  this.index--;

  if (this.index < 0) {
    this.index = this.Library.length - 1;
  }

  this.currentBook = this.Library[this.index];
}

averageRating(){
  return this.totalRatings / this.numRatings;
}

averageCurrentRating(input : any){
  this.currentBook.totalRating += input;
  this.currentBook.numRatings++;

  this.currentBook.Rating = this.currentBook.totalRating / this.currentBook.numRatings;
}

restartRating() {
  this.index = 0;
  this.currentBook = this.Library[this.index];
}

stopRating() {
  alert('Работата е свършена успешно!');
}


}
