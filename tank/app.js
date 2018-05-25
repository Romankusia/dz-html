var root = document.getElementById("root");



function main_() {
    var main_div = document.createElement("div");
    var h1 = document.createElement("h1");
    main_div.appendChild(h1);
    h1.innerHTML = "Most popular tanks";
    var grid_div = document.createElement("div");
    grid_div.className = "grid_div";
    main_div.appendChild(grid_div);

    
    
    tanks.forEach(function(tanks) {
        var grid_box = document.createElement("a");
        grid_box.className = "grid_box";
        grid_div.appendChild(grid_box);

        var tank_img = document.createElement("img");
        tank_img.src = tanks.preview;
        grid_box.appendChild(tank_img);

        var title_div = document.createElement("div");
        title_div.className = "title_div";
        grid_box.appendChild(title_div);

        var flag_img = document.createElement("img");
        flag_img.src = tanks.country_image;
        flag_img.title = tanks.country;
        title_div.appendChild(flag_img)

        var level = document.createElement("h4");
        level.innerHTML = tanks.level;
        title_div.appendChild(level);

        var model = document.createElement("p");
        model.innerHTML = tanks.model;
        model.title = tanks.model;
        title_div.appendChild(model);

        var details = document.createElement("div");
        details.className = "details";
        title_div.append(details);
        
    })
    
    return main_div;
    
}



var call_function = main_();
root.appendChild(main_())