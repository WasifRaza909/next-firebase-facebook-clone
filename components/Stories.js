import StoryCard from './StoryCard';

const stories = [
  {
    name: 'Wasif Raza',
    src: 'https://scontent.fkhi16-1.fna.fbcdn.net/v/t1.6435-9/123598326_1247403895644139_101596972947747919_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeGP98A1qv4PvBHQaDcAO_Pm-6a_k_RAzdv7pr-T9EDN24qf4YrbE7XqnIvf3CMX1_iYQXyTQlDkqvjuKxYgmxfg&_nc_ohc=GGmHZPpkebwAX9VTzEn&_nc_ht=scontent.fkhi16-1.fna&oh=0f67f3f762616371f9788306e60a1a43&oe=614E2E49',
    profile:
      'https://scontent.fkhi16-1.fna.fbcdn.net/v/t1.6435-1/p160x160/127236478_1262480024137192_2874838659792745758_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeFDnyFaqylJ1r5onFMjo2uSEvMvvRN77psS8y-9E3vum7IKWtYkdMie6zGbATO16yXn6HwAx5eo8uuNXHF0IXkg&_nc_ohc=4V9lWPB4wEoAX9DGhQS&_nc_ht=scontent.fkhi16-1.fna&oh=6bdbc712d20bc3e397c0cc0a7d47bfce&oe=614E0A24',
  },
  {
    name: 'Elon Mask',
    src: 'https://links.papareact.com/4zn',
    profile: 'https://links.papareact.com/kxk',
  },
  {
    name: 'Jeff Bezoz',
    src: 'https://links.papareact.com/k2j',
    profile: 'https://links.papareact.com/f0p',
  },
  {
    name: 'Mark Zuckerberg',
    src: 'https://links.papareact.com/xql',
    profile: 'https://links.papareact.com/snf',
  },
  {
    name: 'Bill Gates',
    src: 'https://links.papareact.com/4u4',
    profile: 'https://links.papareact.com/zvy',
  },
];

function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story) => (
        <StoryCard
          key={story.src}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  );
}

export default Stories;
