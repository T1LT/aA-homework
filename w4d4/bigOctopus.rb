def sluggish_octopus(fish)
    prc = Proc.new { |a, b| a.length <=> b.length }
    sorted = false
    while !sorted
        sorted = true
        (0...fish.length - 1).each do |i|
            if prc.call(fish[i], fish[i + 1]) == 1
                fish[i], fish[i + 1] = fish[i + 1], fish[i]
                sorted = false
            end
        end
    end
    fish[-1]
end

def dominant_octopus(fish)
    prc = Proc.new { |a, b| a.length <=> b.length }
    return fish if fish.length <= 1
    pivot = fish[0]
    left = fish[1..-1].select { |el| prc.call(el, pivot) <= 0 }
    right = fish[1..-1].select { |el| prc.call(el, pivot) > 0 }
    dominant_octopus(left) + [pivot] + dominant_octopus(right)
end

def clever_octopus(fish)
    max = ""
    fish.each do |f|
        if f.length > max.length
            max = f
        end
    end
    max
end

fish = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']
p sluggish_octopus(fish)
p dominant_octopus(fish)[-1]
p clever_octopus(fish)

def slow_dance(dir, tiles)
    (0...tiles.length).each do |i|
        return i if tiles[i] == dir
    end
    nil
end

def fast_dance(dir, tiles)
    tiles[dir]
end

tiles_array = ["up", "right-up", "right", "right-down", "down", "left-down", "left",  "left-up"]
p slow_dance("up", tiles_array)
p slow_dance("right-down", tiles_array)

hash = {}
(0...tiles_array.length).each do |i|
    hash[tiles_array[i]] = i
end
p fast_dance("up", hash)
p fast_dance("right-down", hash)