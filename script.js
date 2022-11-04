/*
🎬 Video playlist UI Design like Skillshare With Vanilla JavaScript
👨🏻‍⚕️ By: Coding Design

You can do whatever you want with the code. However if you love my content, you can subscribed my YouTube Channel
🌎link: www.youtube.com/codingdesign
*/

const main_video = document.querySelector('.main-video iframe');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': 'a1',
        'video':
        {'title': 'manipulate text background'},
        'name': 'manipulate text background.mp4',
        'duration': '2:47',
    }


];

function updateData(d){
data= d;
}

function update(){
    data.forEach((video, i) => {
        let video_element = `
                    <div class="video" data-id="${video.index}" >
                        <img src="images/play.svg" alt="">
                        <p>${i + 1 > 9 ? i + 1 : '0' + (i + 1)}. </p>
                        <h3 class="title">${video.video.title}</h3>
                        <p class="time">${video.video.lengthSeconds} seconds</p>
                    </div>
        `;
        video_playlist.innerHTML += video_element;
    });


    let videos = document.querySelectorAll('.video');
videos[0].classList.add('active');
videos[0].querySelector('img').src = 'images/pause.svg';

videos.forEach((selected_video,index) => {
    selected_video.onclick = () => {

        for (all_videos of videos) {
            all_videos.classList.remove('active');
            all_videos.querySelector('img').src = 'images/play.svg';

        }

        selected_video.classList.add('active');
        selected_video.querySelector('img').src = 'images/pause.svg';

      //  let match_video = data.find(video => video.id == selected_video.dataset.id);
      let match_video = data[index];
        main_video.src = 'https://www.youtube.com/embed/' + match_video.video.videoId;
        console.log(main_video.src);
        main_video_title.innerHTML = match_video.video.title;
    }
});

}
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6ad79dc712msh5215880eff24e19p16cf70jsnc60d38e2da84',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};

fetch('https://youtube138.p.rapidapi.com/playlist/videos/?id=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR&hl=en&gl=US', options)
	.then(response => response.json())
	.then(response => {updateData(response.contents); update();})
	.catch(err => console.error(err));



