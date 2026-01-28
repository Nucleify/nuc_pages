<template>
  <section id="content-management">
    <div class="content-container container">
      <div class="content-visual">
        <ad-card class="nuc-card-base content-card">
          <template #content>
            <nuc-animation-hexagons style="opacity: 0.3" />
            <div class="content-preview">
              <div class="preview-header">
                <div class="preview-dot"></div>
                <div class="preview-dot"></div>
                <div class="preview-dot"></div>
              </div>
              <div class="preview-body">
                <div class="preview-sidebar">
                  <div class="sidebar-item active">
                    <Icon name="mdi:file-document-outline" />
                  </div>
                  <div class="sidebar-item">
                    <Icon name="mdi:image-outline" />
                  </div>
                  <div class="sidebar-item">
                    <Icon name="mdi:cog-outline" />
                  </div>
                </div>
                <div class="preview-content">
                  <div class="content-block title"></div>
                  <div class="content-block text"></div>
                  <div class="content-block text short"></div>
                  <div class="content-block image"></div>
                </div>
              </div>
            </div>
          </template>
        </ad-card>
      </div>

      <div class="content-info">
        <span class="content-badge">CONTENT MANAGEMENT</span>
        <h2 class="content-heading">
          Update your website 
          <span class="highlight">without any code</span>
        </h2>
        <p class="content-description">
          Simple admin panel lets you edit text, swap images, and publish changes instantly. 
          No developer needed - you're in full control.
        </p>
        
        <div class="content-features">
          <div class="feature">
            <Icon name="mdi:pencil-outline" />
            <span>Edit text directly</span>
          </div>
          <div class="feature">
            <Icon name="mdi:image-plus-outline" />
            <span>Drag & drop images</span>
          </div>
          <div class="feature">
            <Icon name="mdi:rocket-launch-outline" />
            <span>Publish in one click</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

