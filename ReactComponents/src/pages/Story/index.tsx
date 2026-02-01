import preactLogo from '../../assets/preact.svg';
import {data} from '../../assets/storyData';
import './style.css';
import {useRef, useState} from "preact/hooks";

type IStory = {
  title: string;
  description: string;
  image: string; // Data URL (base64 encoded string)
  author: string;
  date: Date;
  category: string;
}

export function Story() {
  const [stories, setStories] = useState<IStory[]>(data);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleImageUpload(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        addStory(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }

  function handleAddStoryClick() {
    fileInputRef.current?.click();
  }

  function addStory(image: string) {
    // check if we are adding an image to an existing story
    if (stories.length > 0 && stories[stories.length - 1].image === "") {
      //update last story
      const newStories = [...stories];
      newStories[stories.length - 1].image = image;
      setStories(newStories);
    } else {
      // Add a new story to the list
      const newStory: IStory = {
        title: `Story ${stories.length + 1}`,
        description: 'New story!',
        image: image,
        author: 'New Author',
        date: new Date(),
        category: 'New Category',
      };
      setStories([...stories, newStory]);
    }
  }

  function setModalImage(img) {
    const modal = document.querySelector('.image-container');
    modal.innerHTML = `<img src="${img.src}" alt="${img.alt}" class="modal-image"/>`;
  }

  function moveToNextStory(progressBarContainer: HTMLDivElement, stories: NodeListOf<HTMLImageElement>, nextStoryIndex: number, img: HTMLImageElement) {
    const nextStory = stories[nextStoryIndex];
    img.src = nextStory.src;
    img.alt = nextStory.title;
    setModalImage(img);
    startProgressBar(img, progressBarContainer, stories, nextStoryIndex);
  }

  function startProgressBar(img: HTMLImageElement, progressBarContainer: HTMLDivElement, stories: NodeListOf<HTMLImageElement>, currentStoryIndex: number) {
    const progressBars = progressBarContainer.querySelectorAll('.progress-bar-child');
    const isSingleStory = Array.of(progressBars).length === 1
    if (isSingleStory) {
      (progressBars[0] as HTMLDivElement).style.width = '0%';
      currentStoryIndex = 0;
    } else {
      progressBars.forEach((bar, index) => {
        if (index < currentStoryIndex) {
          (bar as HTMLDivElement).style.width = '100%';
        } else if (index >= currentStoryIndex) {
          (bar as HTMLDivElement).style.width = '0%';
        }
      });
    }

    const currentProgressBar = progressBars[currentStoryIndex] as HTMLDivElement;
    currentProgressBar.style.width = '0';
    const startTime = Date.now();
    const duration = 3000; // 3 seconds in milliseconds

    const updateProgressBar = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      const progress = Math.min((elapsedTime / duration) * 100, 100);
      currentProgressBar.style.width = `${progress}%`;

      if (progress >= 100) {
        isSingleStory ? currentStoryIndex = 1 : null;
        clearInterval(updateProgressBar);
        const nextStoryIndex = (currentStoryIndex + 1) % stories.length;
        if (nextStoryIndex === 0) {
          document.querySelector('.modal').remove()
          return;
        }
        moveToNextStory(progressBarContainer, stories, nextStoryIndex, img);
      }
    }, 16);
  }

  function handleStoryClick(event: Event) {
    event.preventDefault(); // Prevent default link behavior
    const stories = document.querySelectorAll('img.story:not(#add-story-btn)') as NodeListOf<HTMLImageElement>;
    const currentStory = event.target as HTMLImageElement;
    const currentStoryIndex = Array.from(stories).indexOf(currentStory);
    const nextStoryIndex = (currentStoryIndex + 1) % stories.length;
    const img = event.target as HTMLImageElement;
    const copy = currentStory.cloneNode(true) as HTMLImageElement;
    const modal = document.createElement('div');
    const imageContainer = document.createElement('div');
    const progressBarContainer = document.createElement('div');

    stories.forEach((_, index) => {
      if (index >= currentStoryIndex) {
        const progressBarDiv = document.createElement('div');
        const progressBar = document.createElement('div');
        progressBarDiv.classList.add('progress-bar');
        progressBar.classList.add('progress-bar-child');
        progressBarDiv.appendChild(progressBar);
        progressBarContainer.appendChild(progressBarDiv);
      }
    });
    progressBarContainer.classList.add('progress-bar-container');
    modal.classList.add('modal')
    imageContainer.classList.add('image-container');
    modal.appendChild(imageContainer);
    document.body.appendChild(modal);

    imageContainer.innerHTML = `<img src="${img.src}" alt="${img.alt}" class="modal-image"/>`;

    modal.insertBefore(progressBarContainer, modal.firstChild);
    startProgressBar(copy, progressBarContainer, stories, currentStoryIndex);
  }

  return (
    <main>
      <div class="home">
        <section>
          <div id="story-holder">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              style={{display: 'none'}}
              ref={fileInputRef}
            />
            <img src={preactLogo} alt="Preact logo" id="add-story-btn" onClick={handleAddStoryClick} class="story"/>
            {stories.sort((a, b) => a.date.getTime() - b.date.getTime()).map((story) => {
              return story.image &&
                <img key={story.date} src={story.image} alt={story.title} class="story" onClick={handleStoryClick}/>
            })}
          </div>
        </section>
      </div>
    </main>
  );
}