import { bootstrapCameraKit } from '@snap/camera-kit';

(async function () {
  const cameraKit = await bootstrapCameraKit({
    apiToken: 'eyJhbGciOiJIUzI1NiIsImtpZCI6IkNhbnZhc1MyU0hNQUNQcm9kIiwidHlwIjoiSldUIn0.eyJhdWQiOiJjYW52YXMtY2FudmFzYXBpIiwiaXNzIjoiY2FudmFzLXMyc3Rva2VuIiwibmJmIjoxNzMyNzc3OTIzLCJzdWIiOiI5YzRkNjMxNy1iYmI5LTRjODQtOWYzMC0wZTVmMzA3NDUxZGZ-U1RBR0lOR34zYjY4MTBkYy0xN2Y2LTRmNzctYTNiZS02YTdjMjU0Zjc2YjgifQ.La2HprjDjaVTHUAEgc7hvsk2xKx7krdqfvuPwdXzN9o',
  });
  const liveRenderTarget = document.getElementById(
    'canvas'
  ) as HTMLCanvasElement;
  const session = await cameraKit.createSession({ liveRenderTarget });
  const mediaStream = await navigator.mediaDevices.getUserMedia({
    video: true,
  });

  await session.setSource(mediaStream);
  await session.play();

  const lens = await cameraKit.lensRepository.loadLens(
    'f0c77a23-a231-4206-9d7a-1008bc4c9629',
    '67e7b4ff-7878-46fd-b778-adbf25e9a722'
  );

  await session.applyLens(lens);
})();