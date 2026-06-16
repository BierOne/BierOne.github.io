---
layout: page
permalink: /publications/
title: publications
description: "(&#x2B)/(&#x2A) denotes equal contribution /corresponding author."
years: [2026, 2025, 2024, 2022, 2019]
nav: true
nav_order: 2
---
<!-- _pages/publications.md -->
<div class="publications">

  <h2 class="year">Preprint</h2>
  {% bibliography -f papers -q @misc* %}

  <div style="margin-top: 3rem;"></div>
  <h2 class="year">Published</h2>
{%- for y in page.years %}
  <!-- <h3 class="year">{{y}}</h3> -->
  {% bibliography -f papers -q @article[year={{y}}]* @inproceedings[year={{y}}]* @ARTICLE[year={{y}}]* @InProceedings[year={{y}}]* %}
{% endfor %}

</div>

