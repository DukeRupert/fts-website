<!-- Gradient Feature Section -->
<script lang="ts">
  const services = [
    {
      title: 'Drainage',
      body: "We offer drainage installation as well as drainage repair. Surprisingly to some, there is a lot that goes on under foundations and retaining walls. Poorly installed drainage systems often collapse in just a little bit of time creating standing water and water under buildings. FTS Excavation services installs quality materials properly so that these systems are designed to last. We follow engineered plans when provided and can also problem solve and design and install non engineered drainage solutions depending on the situation. Our ability to creatively problem solve all types of groundwater issues is one of our fortes you won't find in other excavation companies.",
      image: {url: '/image/stream_200.webp', alt: 'A stream in the woods during fall'}
    },
    {
      title: 'Foundations',
      body: 'This is where it all begins. With the exception of land clearing, which we also do. Some of the components that goes into a good foundation is lot clearing, construction entrances, leveling, dirt removal with dump truck services, excavation and grading, drainage and compaction per plan specs. We do all these things with expertise so you pass your inspection the first time and can build the foundation with confidence. After your foundation is poured, we also will grade in a driveway, trench for utility installation and prepare topsoil for beautiful landscaping.',
      image: {url: '/image/concrete_200.webp', alt: 'A concrete slab'}
    },
    {
      title: 'Land Clearing',
      body: "Do you have a parking lot project, a home build or perhaps leveling needed for a playing field? You'll need to clear the land. We have special excavation equipment that help us remove large amounts of brush quickly and dump truck services to haul it away.",
      image: {url: '/image/brush_200.webp', alt: 'Wild country with trees and shrubs'}
    },
    {
      title: 'Septic & Drain Fields',
      body: 'We will dig for the tanks and drain fields as a subcontractor for a certified installer.',
      image: {url: '/image/outhouse_200.webp', alt: 'An outhouse on a field of green grass'}
    },
    {
      title: 'Sloping or Leveling',
      body: 'We are the excavation experts for sloping and leveling. Once the land has been cleared, we can make those beautiful cuts you see in the land that slope down to a drainage pond or ditch. We can also add retaining walls, which require exact level, compact foundations with drainage for beautiful and long lasting results.',
      image: {
        url: '/image/baseball_200.webp',
        alt: 'A pitch in a baseball game seen from behind the umpire'
      }
    },
    {
      title: 'Driveways',
      body: "We are experts at preparing and repairing driveways. Often times driveways are installed incorrectly creating problems with water and erosion. That is why you should call FTS Excavation services to get the job done right. We can also repair potholes in road work or driveways so that they don't come back and so that water runs off the road instead of puddling in places creating new potholes. Whether you are preparing for paving, asphalt, or gravel, we can properly install a driveways and roads for your project that will last.",
      image: {url: '/image/tire_200.webp', alt: 'A black tire on a paved driveway'}
    },
    {
      title: 'Public Utility Extensions',
      body: 'Whether it is public utility work needed to be done off a busy road, or whether it is a new home or commercial building project that needs to connect to power, sewer and water at the road, we have the ability and experience to handle it. FTS Excavation services will safely trench and prepare for your utility extension.',
      image: {url: '/image/trafficLight.webp', alt: 'A traffic light'}
    },
    {
      title: 'Stack Stone Wall',
      body: 'Our retaining wall services create beautiful stack stone walls that will last decades. Did you know that retaining walls must have drainage installed, giving them beauty and function? They are much more than just stones stacked on top of one another. There is compaction and backfilling with proper materials that must also happen for the retaining wall to last decades. Retaining wall services with FTS Excavation company can give you more usable, property, leveling an otherwise steep yard. Afterwards, you can install beautiful landscaping for a finishing touch.',
      image: {url: '/image/slackstone_200.webp', alt: 'A pile of stone bricks'}
    }
  ]
</script>

<div class="bg-gradient-to-r from-evergreen-400 to-evergreen-700">
  <div class="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
    <h2 class="text-3xl font-extrabold text-cream-500 tracking-tight">
      Commercial and domestic services
    </h2>
    <p class="mt-4 max-w-3xl text-lg text-cream-200">
      If it involves dirt then we have probably done it before. Here are a few of the services we
      offer.
    </p>
    <div
      class="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16"
    >
      {#each services as service}
        <div>
          <div>
            <img
              class="h-36 w-36 rounded-md"
              loading="lazy"
              src={service.image.url}
              alt={service.image.alt}
            />
          </div>
          <div class="mt-6">
            <h3 class="text-lg font-medium text-cream-500">{service.title}</h3>
            <p class="mt-2 text-base text-cream-200">
              {service.body}
            </p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
