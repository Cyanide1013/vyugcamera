import { bootstrapCameraKit } from '@snap/camera-kit';

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

  await session.setSource(mediaStream);
  await session.play();

  const lens = await cameraKit.lensRepository.loadLens(
    'f5230eba-9ddd-43f1-95fd-941e37fef770',    //lens
    '9a3cdccd-03ce-44cf-9939-a2f08a643ea1'     //group
  );

  await session.applyLens(lens);
})();