<template>
    <a class="border-none" id="card-link" target="_blank">
        <div class="card__header">
          <div>
            <img class="card__header header__img skeleton" id="logo-img" alt="" />
          </div>
          <h3 class="card__header header__title" id="card-title">
            <div class="skeleton skeleton-text"></div>
          </h3>
        </div>
      
        <div class="card__body">
          <div class="card__body body__text" id="card-details">
            <div class="skeleton skeleton-text skeleton-text__body"></div>
          </div>
        </div>
      
        <div class="card__footer" id="card-footer">
          <div class="skeleton skeleton-text skeleton-footer"></div>
        </div>
      </a>
</template>

<style>
.skeleton {
    animation: skeleton-loading 1s linear infinite alternate;
  }
  
  @keyframes skeleton-loading {
    0% {
      background-color: hsl(200, 20%, 80%);
    }
    100% {
      background-color: hsl(200, 20%, 95%);
    }
  }
  
  .skeleton-text {
    width: 100%;
    height: 0.7rem;
    margin-bottom: 0.5rem;
    border-radius: 0.25rem;
  }
  
  .skeleton-text__body {
    width: 75%;
  }
  
  .skeleton-footer {
    width: 30%;
  }
</style>