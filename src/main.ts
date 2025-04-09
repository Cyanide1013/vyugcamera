import { bootstrapCameraKit, createMediaStreamSource, Transform2D } from '@snap/camera-kit';
import "./index.css";

(async function () {
  const cameraKit = await bootstrapCameraKit({
    apiToken: 'eyJhbGciOiJIUzI1NiIsImtpZCI6IkNhbnZhc1MyU0hNQUNQcm9kIiwidHlwIjoiSldUIn0.eyJhdWQiOiJjYW52YXMtY2FudmFzYXBpIiwiaXNzIjoiY2FudmFzLXMyc3Rva2VuIiwibmJmIjoxNzMyNzc3NDg1LCJzdWIiOiIwNDBlYThiNy0xMzk4LTRkOTktOThjMi1iZjUzN2ZmYmE5NDZ-U1RBR0lOR343NjEyMzgyOS0wYzQxLTQ2NWMtYjE3OC1iYjJlZWY4YTNlYTIifQ.GAm5xphhO0p9Jb5LESxzI9dOtTWwCA4lg78phW_Ks88',
  });
  const liveRenderTarget = document.getElementById(
    'canvas'
  ) as HTMLCanvasElement;


  const session = await cameraKit.createSession({ liveRenderTarget });
  const mediaStream = await navigator.mediaDevices.getUserMedia({
    video: true,  
  });

  // const mediaStream = await navigator.mediaDevices.getUserMedia({
  //   video: { width: 640, height: 480, frameRate: { ideal: 30, max: 30 } },
  // });

  const source = createMediaStreamSource(mediaStream)
  // await session.setSource(mediaStream);
  await session.setSource(source);
  // source.setTransform(Transform2D.MirrorX)
  await session.play();

  // setTimeout(async () => {
  //   const lens = await cameraKit.lensRepository.loadLens(
  //     "f0c77a23-a231-4206-9d7a-1008bc4c9629",
  //     "67e7b4ff-7878-46fd-b778-adbf25e9a722"
  //   );

  //   await session.applyLens(lens);
  // }, 1000);

  const lens = await cameraKit.lensRepository.loadLens(
    'e27e2101-5fa9-4c5a-a991-6cea672231d8',
    '259776e5-d370-4529-98d4-a25d80c77dd0'  );

  await session.applyLens(lens);
})();

